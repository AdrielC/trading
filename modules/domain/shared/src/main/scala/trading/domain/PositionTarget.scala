package trading.domain

import cats.{Eq, Show}
import cats.derived.*
import cats.syntax.all.*
import io.circe.{Decoder, Encoder, Json, Codec}
import trading.state.Prices

final case class PositionTarget(
  target: Int,
  forecast: Forecast
) derives Codec.AsObject, Eq, Show