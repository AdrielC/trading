pages = [{"l":"index.html","n":"feed","t":"feed","d":"","k":"static"},
{"l":"trading/feed.html","n":"trading.feed","t":"package trading.feed","d":"trading/feed","k":"package"},
{"l":"trading/feed/Config$.html","n":"Config","t":"object Config","d":"trading/feed/Config$","k":"object"},
{"l":"trading/feed/Config$.html","n":"load","t":"def load[F[_] : Async]: F[FeedConfig]","d":"trading/feed/Config$","k":"def"},
{"l":"trading/feed/Feed$.html","n":"Feed","t":"object Feed","d":"trading/feed/Feed$","k":"object"},
{"l":"trading/feed/Feed$.html","n":"random","t":"def random[F[_] : Time](trProducer: Producer[F, TradeCommand], switcher: Producer[F, SwitchCommand], fcProducer: Producer[F, ForecastCommand]): F[Unit]","d":"trading/feed/Feed$","k":"def"},
{"l":"trading/feed/FeedConfig.html","n":"FeedConfig","t":"class FeedConfig(httpPort: Port, pulsar: Config)","d":"trading/feed/FeedConfig","k":"class"},
{"l":"trading/feed/Main$.html","n":"Main","t":"object Main extends Simple","d":"trading/feed/Main$","k":"object"},
{"l":"trading/feed/Main$.html","n":"resources","t":"def resources: Resource[IO, (Resource[IO, Server], IO[Unit])]","d":"trading/feed/Main$","k":"def"},
{"l":"trading/feed/Main$.html","n":"run","t":"def run: IO[Unit]","d":"trading/feed/Main$","k":"def"},
{"l":"trading/feed/Main$.html","n":"settings","t":"def settings[A : Shard](name: String): Option[Settings[IO, A]]","d":"trading/feed/Main$","k":"def"},
{"l":"trading/feed/Main$.html","n":"swSettings","t":"val swSettings: Option[Settings[IO, SwitchCommand]]","d":"trading/feed/Main$","k":"val"},
{"l":"docs/index.html","n":"feed","t":"feed","d":"","k":"static"}];