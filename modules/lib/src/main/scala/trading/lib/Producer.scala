package trading.lib

import java.nio.charset.StandardCharsets.UTF_8

import cats.Eq
import cats.effect.kernel.{ Async, Ref, Resource }
import cats.effect.std.Queue
import cats.syntax.all.*
import cats.{ Applicative, Parallel, Show }
import dev.profunktor.pulsar.{ Producer as PulsarProducer, * }
import fs2.kafka.{ KafkaProducer, ProducerSettings }
import io.circe.Encoder
import io.circe.syntax.*

trait Producer[F[_], A]:
  def send(a: A): F[Unit]
  def send(a: A, properties: Map[String, String]): F[Unit]

object Producer:
  def local[F[_]: Applicative, A](queue: Queue[F, Option[A]]): Resource[F, Producer[F, A]] =
    Resource.make[F, Producer[F, A]](
      Applicative[F].pure(
        new:
          def send(a: A): F[Unit]                                  = queue.offer(Some(a))
          def send(a: A, properties: Map[String, String]): F[Unit] = send(a)
      )
    )(_ => queue.offer(None))

  def dummy[F[_]: Applicative, A]: Producer[F, A] = new:
    def send(a: A): F[Unit]                                  = Applicative[F].unit
    def send(a: A, properties: Map[String, String]): F[Unit] = send(a)

  def test[F[_], A](ref: Ref[F, Option[A]]): Producer[F, A] = new:
    def send(a: A): F[Unit]                                  = ref.set(Some(a))
    def send(a: A, properties: Map[String, String]): F[Unit] = send(a)

  private def dummySeqIdMaker[A]: SeqIdMaker[A] = new:
    def next(prevId: Long, prevPayload: Option[A], payload: A): Long = 0L

  private def dedupSharded[F[_]: Async: Logger: Parallel, A: Encoder: Shard](
      client: Pulsar.T,
      topic: Topic.Single,
      seqIdMaker: Option[SeqIdMaker[A]] = None
  ): Resource[F, Producer[F, A]] =
    val settings =
      PulsarProducer
        .Settings[F, A]()
        .withShardKey(Shard[A].key)
        .withLogger(Logger.pulsar[F, A]("out"))

    val encoder: A => Array[Byte] = _.asJson.noSpaces.getBytes(UTF_8)

    val _settings = seqIdMaker.fold(settings)(settings.withDeduplication)

    PulsarProducer.make[F, A](client, topic, encoder, _settings).map { p =>
      new:
        def send(a: A): F[Unit]                                  = p.send_(a)
        def send(a: A, properties: Map[String, String]): F[Unit] = p.send_(a, properties)
    }
  def sharded[F[_]: Async: Logger: Parallel, A: Encoder: Shard](
      client: Pulsar.T,
      topic: Topic.Single
  ): Resource[F, Producer[F, A]] =
    dedupSharded[F, A](client, topic)

  def dedup[F[_]: Async: Logger: Parallel, A: Encoder: Eq](
      client: Pulsar.T,
      topic: Topic.Single
  ): Resource[F, Producer[F, A]] =
    given Shard[A] = Shard.default[A]
    dedupSharded[F, A](client, topic, Some(SeqIdMaker.fromEq[A]))

  def pulsar[F[_]: Async: Logger: Parallel, A: Encoder](
      client: Pulsar.T,
      topic: Topic.Single
  ): Resource[F, Producer[F, A]] =
    given Shard[A] = Shard.default[A]
    sharded[F, A](client, topic)

  def kafka[F[_]: Async, A](
      settings: ProducerSettings[F, String, A],
      topic: String
  ): Resource[F, Producer[F, A]] =
    KafkaProducer.resource(settings).map { p =>
      new:
        def send(a: A): F[Unit] =
          p.produceOne_(topic, "key", a).flatten.void
        def send(a: A, properties: Map[String, String]): F[Unit] = send(a)
    }
