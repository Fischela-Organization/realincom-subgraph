import {
  LoanCreated as LoanCreatedEvent,
  LoanPayed as LoanPayedEvent,
  LoanRequest as LoanRequestEvent,
  LoanWithdrawn as LoanWithdrawnEvent,
  MoneyBorrowed as MoneyBorrowedEvent,
  MoneyTopped as MoneyToppedEvent,
  RealIncomLoanValueReceived as RealIncomLoanValueReceivedEvent,
  RealIncomLoanValueSent as RealIncomLoanValueSentEvent
} from "../generated/RealIncomLoan/RealIncomLoan"
import {
  LoanCreated,
  LoanPayed,
  LoanRequest,
  LoanWithdrawn,
  MoneyBorrowed,
  MoneyTopped,
  RealIncomLoanValueReceived,
  RealIncomLoanValueSent
} from "../generated/schema"

export function handleLoanCreated(event: LoanCreatedEvent): void {
  let entity = new LoanCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amountSupplied = event.params.amountSupplied
  entity.interestRate = event.params.interestRate
  entity.loanDuration = event.params.loanDuration
  entity.toBePaidMonthly = event.params.toBePaidMonthly
  entity.roi = event.params.roi
  entity.lender = event.params.lender
  entity.isActive = event.params.isActive
  entity.loanId = event.params.loanId
  entity.save()
}

export function handleLoanPayed(event: LoanPayedEvent): void {
  let entity = new LoanPayed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amountToPayBack = event.params.amountToPayBack
  entity.lender = event.params.lender
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId
  entity.borrowerId = event.params.borrowerId
  entity.save()
}

export function handleLoanRequest(event: LoanRequestEvent): void {
  let entity = new LoanRequest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amountBorrowed = event.params.amountBorrowed
  entity.interestRate = event.params.interestRate
  entity.loanDuration = event.params.loanDuration
  entity.monthlyRemittance = event.params.monthlyRemittance
  entity.isApproved = event.params.isApproved
  entity.lender = event.params.lender
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId
  entity.borrowId = event.params.borrowId
  entity.nftCollateralId = event.params.nftCollateralId
  entity.save()
}

export function handleLoanWithdrawn(event: LoanWithdrawnEvent): void {
  let entity = new LoanWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._amount = event.params._amount
  entity.lender = event.params.lender
  entity.loanId = event.params.loanId
  entity.save()
}

export function handleMoneyBorrowed(event: MoneyBorrowedEvent): void {
  let entity = new MoneyBorrowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amountBorrowed = event.params.amountBorrowed
  entity.interestRate = event.params.interestRate
  entity.loanDuration = event.params.loanDuration
  entity.monthlyRemittance = event.params.monthlyRemittance
  entity.isApproved = event.params.isApproved
  entity.lender = event.params.lender
  entity.loanId = event.params.loanId
  entity.borrowerId = event.params.borrowerId
  entity.save()
}

export function handleMoneyTopped(event: MoneyToppedEvent): void {
  let entity = new MoneyTopped(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.loanId = event.params.loanId
  entity.amountTopped = event.params.amountTopped
  entity.sender = event.params.sender
  entity.save()
}

export function handleRealIncomLoanValueReceived(
  event: RealIncomLoanValueReceivedEvent
): void {
  let entity = new RealIncomLoanValueReceived(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.value = event.params.value
  entity.save()
}

export function handleRealIncomLoanValueSent(
  event: RealIncomLoanValueSentEvent
): void {
  let entity = new RealIncomLoanValueSent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.to = event.params.to
  entity.val = event.params.val
  entity.save()
}
