package trading.domain

import cats.{ Eq, Show }
import cats.derived.*
import cats.syntax.all.*
import io.circe.{ Decoder, Encoder, Json }

// FIXME: Derivation does not work
//enum VoteResult derives Eq, Show:
enum VoteResult:

  case Up, Down

  def asInt: Int = this match
    case Up           => 1
    case Down         => -1

object VoteResult:
  given Eq[VoteResult]   = Eq.fromUniversalEquals
  given Show[VoteResult] = Show.fromToString

  given Decoder[VoteResult] = Decoder[String].emap[VoteResult] { str =>
    Either.catchNonFatal(valueOf(str)).leftMap(_.getMessage)
  }

  given Encoder[VoteResult] = Encoder[String].contramap[VoteResult](_.toString)
