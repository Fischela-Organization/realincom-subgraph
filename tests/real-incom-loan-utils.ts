import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  LoanCreated,
  LoanPayed,
  LoanRequest,
  LoanWithdrawn,
  MoneyBorrowed,
  MoneyTopped,
  RealIncomLoanValueReceived,
  RealIncomLoanValueSent
} from "../generated/RealIncomLoan/RealIncomLoan"

export function createLoanCreatedEvent(
  amountSupplied: BigInt,
  interestRate: BigInt,
  loanDuration: BigInt,
  toBePaidMonthly: BigInt,
  roi: BigInt,
  lender: Address,
  isActive: boolean,
  loanId: BigInt
): LoanCreated {
  let loanCreatedEvent = changetype<LoanCreated>(newMockEvent())

  loanCreatedEvent.parameters = new Array()

  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "amountSupplied",
      ethereum.Value.fromUnsignedBigInt(amountSupplied)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "toBePaidMonthly",
      ethereum.Value.fromUnsignedBigInt(toBePaidMonthly)
    )
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("roi", ethereum.Value.fromUnsignedBigInt(roi))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("isActive", ethereum.Value.fromBoolean(isActive))
  )
  loanCreatedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanCreatedEvent
}

export function createLoanPayedEvent(
  amountToPayBack: BigInt,
  lender: Address,
  borrower: Address,
  loanId: BigInt,
  borrowerId: BigInt
): LoanPayed {
  let loanPayedEvent = changetype<LoanPayed>(newMockEvent())

  loanPayedEvent.parameters = new Array()

  loanPayedEvent.parameters.push(
    new ethereum.EventParam(
      "amountToPayBack",
      ethereum.Value.fromUnsignedBigInt(amountToPayBack)
    )
  )
  loanPayedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanPayedEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanPayedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanPayedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerId",
      ethereum.Value.fromUnsignedBigInt(borrowerId)
    )
  )

  return loanPayedEvent
}

export function createLoanRequestEvent(
  amountBorrowed: BigInt,
  interestRate: BigInt,
  loanDuration: BigInt,
  monthlyRemittance: BigInt,
  isApproved: boolean,
  lender: Address,
  borrower: Address,
  loanId: BigInt,
  borrowId: BigInt,
  nftCollateralId: BigInt
): LoanRequest {
  let loanRequestEvent = changetype<LoanRequest>(newMockEvent())

  loanRequestEvent.parameters = new Array()

  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "amountBorrowed",
      ethereum.Value.fromUnsignedBigInt(amountBorrowed)
    )
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "monthlyRemittance",
      ethereum.Value.fromUnsignedBigInt(monthlyRemittance)
    )
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "isApproved",
      ethereum.Value.fromBoolean(isApproved)
    )
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowId",
      ethereum.Value.fromUnsignedBigInt(borrowId)
    )
  )
  loanRequestEvent.parameters.push(
    new ethereum.EventParam(
      "nftCollateralId",
      ethereum.Value.fromUnsignedBigInt(nftCollateralId)
    )
  )

  return loanRequestEvent
}

export function createLoanWithdrawnEvent(
  _amount: BigInt,
  lender: Address,
  loanId: BigInt
): LoanWithdrawn {
  let loanWithdrawnEvent = changetype<LoanWithdrawn>(newMockEvent())

  loanWithdrawnEvent.parameters = new Array()

  loanWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  loanWithdrawnEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  loanWithdrawnEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )

  return loanWithdrawnEvent
}

export function createMoneyBorrowedEvent(
  amountBorrowed: BigInt,
  interestRate: BigInt,
  loanDuration: BigInt,
  monthlyRemittance: BigInt,
  isApproved: boolean,
  lender: Address,
  loanId: BigInt,
  borrowerId: BigInt
): MoneyBorrowed {
  let moneyBorrowedEvent = changetype<MoneyBorrowed>(newMockEvent())

  moneyBorrowedEvent.parameters = new Array()

  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "amountBorrowed",
      ethereum.Value.fromUnsignedBigInt(amountBorrowed)
    )
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "interestRate",
      ethereum.Value.fromUnsignedBigInt(interestRate)
    )
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "loanDuration",
      ethereum.Value.fromUnsignedBigInt(loanDuration)
    )
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "monthlyRemittance",
      ethereum.Value.fromUnsignedBigInt(monthlyRemittance)
    )
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "isApproved",
      ethereum.Value.fromBoolean(isApproved)
    )
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  moneyBorrowedEvent.parameters.push(
    new ethereum.EventParam(
      "borrowerId",
      ethereum.Value.fromUnsignedBigInt(borrowerId)
    )
  )

  return moneyBorrowedEvent
}

export function createMoneyToppedEvent(
  loanId: BigInt,
  amountTopped: BigInt,
  sender: Address
): MoneyTopped {
  let moneyToppedEvent = changetype<MoneyTopped>(newMockEvent())

  moneyToppedEvent.parameters = new Array()

  moneyToppedEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  moneyToppedEvent.parameters.push(
    new ethereum.EventParam(
      "amountTopped",
      ethereum.Value.fromUnsignedBigInt(amountTopped)
    )
  )
  moneyToppedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return moneyToppedEvent
}

export function createRealIncomLoanValueReceivedEvent(
  sender: Address,
  value: BigInt
): RealIncomLoanValueReceived {
  let realIncomLoanValueReceivedEvent = changetype<RealIncomLoanValueReceived>(
    newMockEvent()
  )

  realIncomLoanValueReceivedEvent.parameters = new Array()

  realIncomLoanValueReceivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  realIncomLoanValueReceivedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return realIncomLoanValueReceivedEvent
}

export function createRealIncomLoanValueSentEvent(
  to: Address,
  val: BigInt
): RealIncomLoanValueSent {
  let realIncomLoanValueSentEvent = changetype<RealIncomLoanValueSent>(
    newMockEvent()
  )

  realIncomLoanValueSentEvent.parameters = new Array()

  realIncomLoanValueSentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  realIncomLoanValueSentEvent.parameters.push(
    new ethereum.EventParam("val", ethereum.Value.fromUnsignedBigInt(val))
  )

  return realIncomLoanValueSentEvent
}
