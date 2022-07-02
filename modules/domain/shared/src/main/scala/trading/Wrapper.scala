package trading

import monocle.Iso

trait Wrapper[A, B] {
  def iso: Iso[A, B]
}

object Wrapper {
  def apply[A, B](implicit ev: Wrapper[A, B]): Wrapper[A, B] = ev
}
