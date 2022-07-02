pages = [{"l":"index.html","n":"snapshots","t":"snapshots","d":"","k":"static"},
{"l":"trading/snapshots.html","n":"trading.snapshots","t":"package trading.snapshots","d":"trading/snapshots","k":"package"},
{"l":"trading/snapshots.html","n":"Tick","t":"type Tick = Unit","d":"trading/snapshots","k":"type"},
{"l":"trading/snapshots/Config$.html","n":"Config","t":"object Config","d":"trading/snapshots/Config$","k":"object"},
{"l":"trading/snapshots/Config$.html","n":"load","t":"def load[F[_] : Async]: F[SnapshotsConfig]","d":"trading/snapshots/Config$","k":"def"},
{"l":"trading/snapshots/Engine$.html","n":"Engine","t":"object Engine","d":"trading/snapshots/Engine$","k":"object"},
{"l":"trading/snapshots/Engine$.html","n":"In","t":"type In = Either[Msg[TradeEvent], Msg[SwitchEvent]] | Tick","d":"trading/snapshots/Engine$","k":"type"},
{"l":"trading/snapshots/Engine$.html","n":"fsm","t":"def fsm[F[_] : Logger](tradeAcker: Acker[F, TradeEvent], switchAcker: Acker[F, SwitchEvent], writer: SnapshotWriter[F]): FSM[F, (TradeState, List[MsgId]), In, Unit]","d":"trading/snapshots/Engine$","k":"def"},
{"l":"trading/snapshots/Main$.html","n":"Main","t":"object Main extends Simple","d":"trading/snapshots/Main$","k":"object"},
{"l":"trading/snapshots/Main$.html","n":"compact","t":"val compact: Option[Settings[IO, SwitchEvent]]","d":"trading/snapshots/Main$","k":"val"},
{"l":"trading/snapshots/Main$.html","n":"mkSub","t":"def mkSub(appId: AppId): Subscription","d":"trading/snapshots/Main$","k":"def"},
{"l":"trading/snapshots/Main$.html","n":"resources","t":"def resources: Resource[IO, (Resource[IO, Server], Resource[IO, DistLock[IO]], Consumer[IO, TradeEvent], Consumer[IO, SwitchEvent], SnapshotReader[IO], FSM[IO, (TradeState, List[MsgId]), In, Unit])]","d":"trading/snapshots/Main$","k":"def"},
{"l":"trading/snapshots/Main$.html","n":"run","t":"def run: IO[Unit]","d":"trading/snapshots/Main$","k":"def"},
{"l":"trading/snapshots/SnapshotsConfig.html","n":"SnapshotsConfig","t":"class SnapshotsConfig(httpPort: Port, pulsar: Config, redisUri: RedisURI, keyExpiration: KeyExpiration, appId: AppId)","d":"trading/snapshots/SnapshotsConfig","k":"class"},
{"l":"docs/index.html","n":"snapshots","t":"snapshots","d":"","k":"static"}];