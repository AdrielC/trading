pages = [{"l":"index.html","n":"lib","t":"lib","d":"","k":"static"},
{"l":"trading/lib.html","n":"trading.lib","t":"package trading.lib","d":"trading/lib","k":"package"},
{"l":"trading/lib.html","n":"eitherUnionIso","t":"def eitherUnionIso[E <: Matchable, A <: Matchable]: Iso[Either[E, A], E | A]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"lift","t":"def lift[E <: Throwable : ClassTag]: F[Either[E, A]]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"liftU","t":"def liftU[E <: Throwable : ClassTag]: F[E | A]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"onFirstMessage","t":"def onFirstMessage(action: F[Unit]): Stream[F, A]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"rethrowU","t":"def rethrowU(implicit evidence$6: MonadThrow[F]): F[A]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"rewind","t":"def rewind(id: MsgId, gate: Deferred[F, Unit])(implicit evidence$1: Monad[F]): Stream[F, Msg[A]]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"union","t":"def union: Stream[F, Msg[A | B]]","d":"trading/lib","k":"def"},
{"l":"trading/lib.html","n":"union2","t":"def union2: Stream[F, Msg[A | B | C]]","d":"trading/lib","k":"def"},
{"l":"trading/lib/Acker.html","n":"Acker","t":"trait Acker[F[_], A]","d":"trading/lib/Acker","k":"trait"},
{"l":"trading/lib/Acker.html","n":"ack","t":"def ack(id: MsgId): F[Unit]","d":"trading/lib/Acker","k":"def"},
{"l":"trading/lib/Acker.html","n":"ack","t":"def ack(ids: Set[MsgId]): F[Unit]","d":"trading/lib/Acker","k":"def"},
{"l":"trading/lib/Acker.html","n":"ack","t":"def ack(id: MsgId, tx: Txn): F[Unit]","d":"trading/lib/Acker","k":"def"},
{"l":"trading/lib/Acker.html","n":"nack","t":"def nack(id: MsgId): F[Unit]","d":"trading/lib/Acker","k":"def"},
{"l":"trading/lib/Compaction.html","n":"Compaction","t":"trait Compaction[A]","d":"trading/lib/Compaction","k":"trait"},
{"l":"trading/lib/Compaction.html","n":"key","t":"def key: A => MessageKey","d":"trading/lib/Compaction","k":"def"},
{"l":"trading/lib/Compaction$.html","n":"Compaction","t":"object Compaction","d":"trading/lib/Compaction$","k":"object"},
{"l":"trading/lib/Compaction$.html","n":"apply","t":"def apply[A : Compaction]: Compaction[A]","d":"trading/lib/Compaction$","k":"def"},
{"l":"trading/lib/Compaction$.html","n":"by","t":"def by(s: String): MessageKey","d":"trading/lib/Compaction$","k":"def"},
{"l":"trading/lib/Compaction$.html","n":"default","t":"def default[A]: Compaction[A]","d":"trading/lib/Compaction$","k":"def"},
{"l":"trading/lib/Compaction$.html","n":"given_Compaction_Alert","t":"given given_Compaction_Alert: given_Compaction_Alert.type","d":"trading/lib/Compaction$","k":"given"},
{"l":"trading/lib/Compaction$.html","n":"given_Compaction_PriceUpdate","t":"given given_Compaction_PriceUpdate: given_Compaction_PriceUpdate.type","d":"trading/lib/Compaction$","k":"given"},
{"l":"trading/lib/Compaction$.html","n":"given_Compaction_SwitchCommand","t":"given given_Compaction_SwitchCommand: given_Compaction_SwitchCommand.type","d":"trading/lib/Compaction$","k":"given"},
{"l":"trading/lib/Compaction$.html","n":"given_Compaction_SwitchEvent","t":"given given_Compaction_SwitchEvent: given_Compaction_SwitchEvent.type","d":"trading/lib/Compaction$","k":"given"},
{"l":"trading/lib/Compaction$$given_Compaction_Alert$.html","n":"given_Compaction_Alert","t":"object given_Compaction_Alert extends Compaction[Alert]","d":"trading/lib/Compaction$$given_Compaction_Alert$","k":"object"},
{"l":"trading/lib/Compaction$$given_Compaction_Alert$.html","n":"key","t":"val key: Alert => MessageKey","d":"trading/lib/Compaction$$given_Compaction_Alert$","k":"val"},
{"l":"trading/lib/Compaction$$given_Compaction_PriceUpdate$.html","n":"given_Compaction_PriceUpdate","t":"object given_Compaction_PriceUpdate extends Compaction[PriceUpdate]","d":"trading/lib/Compaction$$given_Compaction_PriceUpdate$","k":"object"},
{"l":"trading/lib/Compaction$$given_Compaction_PriceUpdate$.html","n":"key","t":"val key: PriceUpdate => MessageKey","d":"trading/lib/Compaction$$given_Compaction_PriceUpdate$","k":"val"},
{"l":"trading/lib/Compaction$$given_Compaction_SwitchCommand$.html","n":"given_Compaction_SwitchCommand","t":"object given_Compaction_SwitchCommand extends Compaction[SwitchCommand]","d":"trading/lib/Compaction$$given_Compaction_SwitchCommand$","k":"object"},
{"l":"trading/lib/Compaction$$given_Compaction_SwitchCommand$.html","n":"key","t":"val key: SwitchCommand => MessageKey","d":"trading/lib/Compaction$$given_Compaction_SwitchCommand$","k":"val"},
{"l":"trading/lib/Compaction$$given_Compaction_SwitchEvent$.html","n":"given_Compaction_SwitchEvent","t":"object given_Compaction_SwitchEvent extends Compaction[SwitchEvent]","d":"trading/lib/Compaction$$given_Compaction_SwitchEvent$","k":"object"},
{"l":"trading/lib/Compaction$$given_Compaction_SwitchEvent$.html","n":"key","t":"val key: SwitchEvent => MessageKey","d":"trading/lib/Compaction$$given_Compaction_SwitchEvent$","k":"val"},
{"l":"trading/lib/Consumer.html","n":"Consumer","t":"trait Consumer[F[_], A] extends Acker[F, A]","d":"trading/lib/Consumer","k":"trait"},
{"l":"trading/lib/Consumer.html","n":"lastMsgId","t":"def lastMsgId: F[Option[MsgId]]","d":"trading/lib/Consumer","k":"def"},
{"l":"trading/lib/Consumer.html","n":"receive","t":"def receive: Stream[F, A]","d":"trading/lib/Consumer","k":"def"},
{"l":"trading/lib/Consumer.html","n":"receiveM","t":"def receiveM: Stream[F, Msg[A]]","d":"trading/lib/Consumer","k":"def"},
{"l":"trading/lib/Consumer.html","n":"receiveM","t":"def receiveM(id: MsgId): Stream[F, Msg[A]]","d":"trading/lib/Consumer","k":"def"},
{"l":"trading/lib/Consumer$.html","n":"Consumer","t":"object Consumer","d":"trading/lib/Consumer$","k":"object"},
{"l":"trading/lib/Consumer$.html","n":"KafkaOffset","t":"type KafkaOffset = Map[TopicPartition, OffsetAndMetadata]","d":"trading/lib/Consumer$","k":"type"},
{"l":"trading/lib/Consumer$.html","n":"Properties","t":"type Properties = Map[String, String]","d":"trading/lib/Consumer$","k":"type"},
{"l":"trading/lib/Consumer$.html","n":"kafka","t":"def kafka[F[_] : Async, A](settings: ConsumerSettings[F, String, A], topic: String): Resource[F, Consumer[F, A]]","d":"trading/lib/Consumer$","k":"def"},
{"l":"trading/lib/Consumer$.html","n":"local","t":"def local[F[_] : Applicative, A](queue: Queue[F, Option[A]]): Consumer[F, A]","d":"trading/lib/Consumer$","k":"def"},
{"l":"trading/lib/Consumer$.html","n":"pulsar","t":"def pulsar[F[_] : Logger, A : Encoder](client: T, topic: Topic, sub: Subscription, settings: Option[Settings[F, A]]): Resource[F, Consumer[F, A]]","d":"trading/lib/Consumer$","k":"def"},
{"l":"trading/lib/Consumer$$Msg.html","n":"Msg","t":"class Msg[A](id: MsgId, props: Properties, payload: A)","d":"trading/lib/Consumer$$Msg","k":"class"},
{"l":"trading/lib/Consumer$$MsgId.html","n":"MsgId","t":"enum MsgId","d":"trading/lib/Consumer$$MsgId","k":"enum"},
{"l":"trading/lib/Consumer$$MsgId$$Pulsar.html","n":"Pulsar","t":"case Pulsar(id: MessageId)","d":"trading/lib/Consumer$$MsgId","k":"case"},
{"l":"trading/lib/Consumer$$MsgId.html","n":"Dummy","t":"case Dummy extends MsgId","d":"trading/lib/Consumer$$MsgId","k":"case"},
{"l":"trading/lib/Consumer$$MsgId$$Pulsar.html","n":"Pulsar","t":"case Pulsar(id: MessageId)","d":"trading/lib/Consumer$$MsgId$$Pulsar","k":"case"},
{"l":"trading/lib/Consumer$$MsgId$.html","n":"MsgId","t":"object MsgId","d":"trading/lib/Consumer$$MsgId$","k":"object"},
{"l":"trading/lib/Consumer$$MsgId$.html","n":"earliest","t":"def earliest: MsgId","d":"trading/lib/Consumer$$MsgId$","k":"def"},
{"l":"trading/lib/Consumer$$MsgId$.html","n":"from","t":"def from(str: String): Try[MsgId]","d":"trading/lib/Consumer$$MsgId$","k":"def"},
{"l":"trading/lib/Consumer$$MsgId$.html","n":"latest","t":"def latest: MsgId","d":"trading/lib/Consumer$$MsgId$","k":"def"},
{"l":"trading/lib/DistLock.html","n":"DistLock","t":"trait DistLock[F[_]]","d":"trading/lib/DistLock","k":"trait"},
{"l":"trading/lib/DistLock.html","n":"refresh","t":"def refresh: F[Unit]","d":"trading/lib/DistLock","k":"def"},
{"l":"trading/lib/DistLock$.html","n":"DistLock","t":"object DistLock","d":"trading/lib/DistLock$","k":"object"},
{"l":"trading/lib/DistLock$.html","n":"from","t":"def from[F[_] : Temporal](lockName: String, appId: AppId, redis: RedisCommands[F, String, String]): Resource[F, DistLock[F]]","d":"trading/lib/DistLock$","k":"def"},
{"l":"trading/lib/DistLock$.html","n":"make","t":"def make[F[_] : Temporal](lockName: String, appId: AppId, client: RedisClient): Resource[F, DistLock[F]]","d":"trading/lib/DistLock$","k":"def"},
{"l":"trading/lib/FSM.html","n":"FSM","t":"class FSM[F[_], S, I, O](run: (S, I) => F[(S, O)])","d":"trading/lib/FSM","k":"class"},
{"l":"trading/lib/FSM.html","n":"runS","t":"def runS(using F: Functor[F]): (S, I) => F[S]","d":"trading/lib/FSM","k":"def"},
{"l":"trading/lib/FSM$.html","n":"FSM","t":"object FSM","d":"trading/lib/FSM$","k":"object"},
{"l":"trading/lib/FSM$.html","n":"id","t":"def id[S, I, O](run: (S, I) => ((S, O))): FSM[[A] =>> A, S, I, O]","d":"trading/lib/FSM$","k":"def"},
{"l":"trading/lib/GenUUID.html","n":"GenUUID","t":"trait GenUUID[F[_]]","d":"trading/lib/GenUUID","k":"trait"},
{"l":"trading/lib/GenUUID.html","n":"make","t":"def make[A : IsUUID]: F[A]","d":"trading/lib/GenUUID","k":"def"},
{"l":"trading/lib/GenUUID$.html","n":"GenUUID","t":"object GenUUID","d":"trading/lib/GenUUID$","k":"object"},
{"l":"trading/lib/GenUUID$.html","n":"apply","t":"def apply[F[_] : GenUUID]: GenUUID[F]","d":"trading/lib/GenUUID$","k":"def"},
{"l":"trading/lib/GenUUID$.html","n":"given_GenUUID_F","t":"given given_GenUUID_F[F[_] : Sync]: given_GenUUID_F[F]","d":"trading/lib/GenUUID$","k":"given"},
{"l":"trading/lib/Logger.html","n":"Logger","t":"trait Logger[F[_]]","d":"trading/lib/Logger","k":"trait"},
{"l":"trading/lib/Logger.html","n":"debug","t":"def debug(str: => String): F[Unit]","d":"trading/lib/Logger","k":"def"},
{"l":"trading/lib/Logger.html","n":"error","t":"def error(str: => String): F[Unit]","d":"trading/lib/Logger","k":"def"},
{"l":"trading/lib/Logger.html","n":"info","t":"def info(str: => String): F[Unit]","d":"trading/lib/Logger","k":"def"},
{"l":"trading/lib/Logger.html","n":"warn","t":"def warn(str: => String): F[Unit]","d":"trading/lib/Logger","k":"def"},
{"l":"trading/lib/Logger$.html","n":"Logger","t":"object Logger","d":"trading/lib/Logger$","k":"object"},
{"l":"trading/lib/Logger$.html","n":"apply","t":"def apply[F[_] : Logger]: Logger[F]","d":"trading/lib/Logger$","k":"def"},
{"l":"trading/lib/Logger$.html","n":"from","t":"def from[F[_]](log: Logger[F]): Logger[F]","d":"trading/lib/Logger$","k":"def"},
{"l":"trading/lib/Logger$.html","n":"given_Logger_F","t":"given given_Logger_F[F[_] : Sync]: Logger[F]","d":"trading/lib/Logger$","k":"given"},
{"l":"trading/lib/Logger$.html","n":"pulsar","t":"def pulsar[F[_] : Logger, A : Encoder](flow: \"in\" | \"out\"): A => URL => F[Unit]","d":"trading/lib/Logger$","k":"def"},
{"l":"trading/lib/Logger$.html","n":"redisLog","t":"given redisLog[F[_]](using L: Logger[F]): Log[F]","d":"trading/lib/Logger$","k":"given"},
{"l":"trading/lib/Logger$$NoOp$.html","n":"NoOp","t":"object NoOp","d":"trading/lib/Logger$$NoOp$","k":"object"},
{"l":"trading/lib/Logger$$NoOp$.html","n":"given_Logger_F","t":"given given_Logger_F[F[_] : Applicative]: given_Logger_F[F]","d":"trading/lib/Logger$$NoOp$","k":"given"},
{"l":"trading/lib/Producer.html","n":"Producer","t":"trait Producer[F[_], A]","d":"trading/lib/Producer","k":"trait"},
{"l":"trading/lib/Producer.html","n":"send","t":"def send(a: A): F[Unit]","d":"trading/lib/Producer","k":"def"},
{"l":"trading/lib/Producer.html","n":"send","t":"def send(a: A, properties: Map[String, String]): F[Unit]","d":"trading/lib/Producer","k":"def"},
{"l":"trading/lib/Producer.html","n":"send","t":"def send(a: A, tx: Txn): F[Unit]","d":"trading/lib/Producer","k":"def"},
{"l":"trading/lib/Producer.html","n":"send","t":"def send(a: A, properties: Map[String, String], tx: Txn): F[Unit]","d":"trading/lib/Producer","k":"def"},
{"l":"trading/lib/Producer$.html","n":"Producer","t":"object Producer","d":"trading/lib/Producer$","k":"object"},
{"l":"trading/lib/Producer$.html","n":"dummy","t":"def dummy[F[_] : Applicative, A]: Producer[F, A]","d":"trading/lib/Producer$","k":"def"},
{"l":"trading/lib/Producer$.html","n":"kafka","t":"def kafka[F[_] : Async, A](settings: ProducerSettings[F, String, A], topic: String): Resource[F, Producer[F, A]]","d":"trading/lib/Producer$","k":"def"},
{"l":"trading/lib/Producer$.html","n":"local","t":"def local[F[_] : Applicative, A](queue: Queue[F, Option[A]]): Resource[F, Producer[F, A]]","d":"trading/lib/Producer$","k":"def"},
{"l":"trading/lib/Producer$.html","n":"pulsar","t":"def pulsar[F[_] : Parallel, A : Encoder](client: T, topic: Single, settings: Option[Settings[F, A]]): Resource[F, Producer[F, A]]","d":"trading/lib/Producer$","k":"def"},
{"l":"trading/lib/Producer$.html","n":"test","t":"def test[F[_] : Applicative, A](ref: Ref[F, Option[A]]): Producer[F, A]","d":"trading/lib/Producer$","k":"def"},
{"l":"trading/lib/Producer$.html","n":"testMany","t":"def testMany[F[_] : Applicative, A](ref: Ref[F, List[A]]): Producer[F, A]","d":"trading/lib/Producer$","k":"def"},
{"l":"trading/lib/Producer$$Dummy.html","n":"Dummy","t":"class Dummy[F[_], A] extends Producer[F, A]","d":"trading/lib/Producer$$Dummy","k":"class"},
{"l":"trading/lib/Producer$$Dummy.html","n":"send","t":"def send(a: A): F[Unit]","d":"trading/lib/Producer$$Dummy","k":"def"},
{"l":"trading/lib/Producer$$Dummy.html","n":"send","t":"def send(a: A, properties: Map[String, String]): F[Unit]","d":"trading/lib/Producer$$Dummy","k":"def"},
{"l":"trading/lib/Producer$$Dummy.html","n":"send","t":"def send(a: A, tx: Txn): F[Unit]","d":"trading/lib/Producer$$Dummy","k":"def"},
{"l":"trading/lib/Producer$$Dummy.html","n":"send","t":"def send(a: A, properties: Map[String, String], tx: Txn): F[Unit]","d":"trading/lib/Producer$$Dummy","k":"def"},
{"l":"trading/lib/Shard.html","n":"Shard","t":"trait Shard[A]","d":"trading/lib/Shard","k":"trait"},
{"l":"trading/lib/Shard.html","n":"key","t":"def key: A => ShardKey","d":"trading/lib/Shard","k":"def"},
{"l":"trading/lib/Shard$.html","n":"Shard","t":"object Shard","d":"trading/lib/Shard$","k":"object"},
{"l":"trading/lib/Shard$.html","n":"apply","t":"def apply[A : Shard]: Shard[A]","d":"trading/lib/Shard$","k":"def"},
{"l":"trading/lib/Shard$.html","n":"by","t":"def by(s: String): ShardKey","d":"trading/lib/Shard$","k":"def"},
{"l":"trading/lib/Shard$.html","n":"default","t":"def default[A]: Shard[A]","d":"trading/lib/Shard$","k":"def"},
{"l":"trading/lib/Shard$.html","n":"given_Shard_Alert","t":"given given_Shard_Alert: given_Shard_Alert.type","d":"trading/lib/Shard$","k":"given"},
{"l":"trading/lib/Shard$.html","n":"given_Shard_ForecastCommand","t":"given given_Shard_ForecastCommand: given_Shard_ForecastCommand.type","d":"trading/lib/Shard$","k":"given"},
{"l":"trading/lib/Shard$.html","n":"given_Shard_String","t":"given given_Shard_String: given_Shard_String.type","d":"trading/lib/Shard$","k":"given"},
{"l":"trading/lib/Shard$.html","n":"given_Shard_TradeCommand","t":"given given_Shard_TradeCommand: given_Shard_TradeCommand.type","d":"trading/lib/Shard$","k":"given"},
{"l":"trading/lib/Shard$.html","n":"given_Shard_TradeEvent","t":"given given_Shard_TradeEvent: given_Shard_TradeEvent.type","d":"trading/lib/Shard$","k":"given"},
{"l":"trading/lib/Shard$$given_Shard_Alert$.html","n":"given_Shard_Alert","t":"object given_Shard_Alert extends Shard[Alert]","d":"trading/lib/Shard$$given_Shard_Alert$","k":"object"},
{"l":"trading/lib/Shard$$given_Shard_Alert$.html","n":"key","t":"val key: Alert => ShardKey","d":"trading/lib/Shard$$given_Shard_Alert$","k":"val"},
{"l":"trading/lib/Shard$$given_Shard_ForecastCommand$.html","n":"given_Shard_ForecastCommand","t":"object given_Shard_ForecastCommand extends Shard[ForecastCommand]","d":"trading/lib/Shard$$given_Shard_ForecastCommand$","k":"object"},
{"l":"trading/lib/Shard$$given_Shard_ForecastCommand$.html","n":"key","t":"val key: ForecastCommand => ShardKey","d":"trading/lib/Shard$$given_Shard_ForecastCommand$","k":"val"},
{"l":"trading/lib/Shard$$given_Shard_String$.html","n":"given_Shard_String","t":"object given_Shard_String extends Shard[String]","d":"trading/lib/Shard$$given_Shard_String$","k":"object"},
{"l":"trading/lib/Shard$$given_Shard_String$.html","n":"key","t":"val key: String => ShardKey","d":"trading/lib/Shard$$given_Shard_String$","k":"val"},
{"l":"trading/lib/Shard$$given_Shard_TradeCommand$.html","n":"given_Shard_TradeCommand","t":"object given_Shard_TradeCommand extends Shard[TradeCommand]","d":"trading/lib/Shard$$given_Shard_TradeCommand$","k":"object"},
{"l":"trading/lib/Shard$$given_Shard_TradeCommand$.html","n":"key","t":"val key: TradeCommand => ShardKey","d":"trading/lib/Shard$$given_Shard_TradeCommand$","k":"val"},
{"l":"trading/lib/Shard$$given_Shard_TradeEvent$.html","n":"given_Shard_TradeEvent","t":"object given_Shard_TradeEvent extends Shard[TradeEvent]","d":"trading/lib/Shard$$given_Shard_TradeEvent$","k":"object"},
{"l":"trading/lib/Shard$$given_Shard_TradeEvent$.html","n":"key","t":"val key: TradeEvent => ShardKey","d":"trading/lib/Shard$$given_Shard_TradeEvent$","k":"val"},
{"l":"trading/lib/Time.html","n":"Time","t":"trait Time[F[_]]","d":"trading/lib/Time","k":"trait"},
{"l":"trading/lib/Time.html","n":"timestamp","t":"def timestamp: F[Timestamp]","d":"trading/lib/Time","k":"def"},
{"l":"trading/lib/Time$.html","n":"Time","t":"object Time","d":"trading/lib/Time$","k":"object"},
{"l":"trading/lib/Time$.html","n":"apply","t":"def apply[F[_] : Time]: Time[F]","d":"trading/lib/Time$","k":"def"},
{"l":"trading/lib/Time$.html","n":"given_Time_F","t":"given given_Time_F[F[_] : Sync]: given_Time_F[F]","d":"trading/lib/Time$","k":"given"},
{"l":"trading/lib/Txn.html","n":"Txn","t":"trait Txn","d":"trading/lib/Txn","k":"trait"},
{"l":"trading/lib/Txn.html","n":"get","t":"def get: Tx","d":"trading/lib/Txn","k":"def"},
{"l":"trading/lib/Txn$.html","n":"Txn","t":"object Txn","d":"trading/lib/Txn$","k":"object"},
{"l":"trading/lib/Txn$.html","n":"dummy","t":"def dummy: Resource[IO, Txn]","d":"trading/lib/Txn$","k":"def"},
{"l":"trading/lib/Txn$.html","n":"make","t":"def make(pulsar: T): Resource[IO, Txn]","d":"trading/lib/Txn$","k":"def"},
{"l":"docs/index.html","n":"lib","t":"lib","d":"","k":"static"}];