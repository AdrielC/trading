package trading.commands

import trading.domain._
import trading.domain.arbitraries._
import trading.domain.cogen._

import monocle.law.discipline._
import org.scalacheck.Arbitrary
import weaver.FunSuite
import weaver.discipline.Discipline

object TradeCommandSuite extends FunSuite with Discipline {
  checkAll("Traversal[TradeCommand, CommandId]", TraversalTests(TradeCommand._CommandId))
  checkAll("Traversal[TradeCommand, Timestamp]", TraversalTests(TradeCommand._CreatedAt))
}