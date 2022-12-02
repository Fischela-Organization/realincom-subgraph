import {
  LoanCreated as LoanCreatedEvent,
  LoanPayed as LoanPayedEvent,
  LoanRequest as LoanRequestEvent,
  LoanWithdrawn as LoanWithdrawnEvent,
  MoneyBorrowed as MoneyBorrowedEvent,
  MoneyTopped as MoneyToppedEvent,
  RealIncomLoan,
  RealIncomLoanValueReceived as RealIncomLoanValueReceivedEvent,
  RealIncomLoanValueSent as RealIncomLoanValueSentEvent,
} from "../generated/RealIncomLoan/RealIncomLoan";
import { Borrowed, Loan, User } from "../generated/schema";

export function handleLoanCreated(event: LoanCreatedEvent): void {
  let loan = new Loan(event.params.loanId.toHex());
  loan.amountSupplied = event.params.amountSupplied;
  loan.interestRate = event.params.interestRate;
  loan.loanDuration = event.params.loanDuration;
  loan.toBePaidMonthly = event.params.toBePaidMonthly;
  loan.roi = event.params.roi;
  loan.lender = event.params.lender.toHexString();
  loan.isActive = event.params.isActive;
  loan.loanId = event.params.loanId;
  loan.save();
}

export function handleLoanPayed(event: LoanPayedEvent): void {
  let borrowedLoans = Borrowed.load(event.params.loanId.toHex());
  if (borrowedLoans) {
    let loanContract = RealIncomLoan.bind(event.address);
    let amountSupplied = loanContract.try_borrowers(event.params.loanId);
    borrowedLoans.amountBorrowed = amountSupplied.value.getAmountBorrowed()
    borrowedLoans.save();
  }
}

export function handleLoanRequest(event: LoanRequestEvent): void {
  let borrowed = new Borrowed(event.params.borrowId.toHex());
  borrowed.amountBorrowed = event.params.amountBorrowed;
  borrowed.interestRate = event.params.interestRate;
  borrowed.loanDuration = event.params.loanDuration;
  borrowed.monthlyRemittance = event.params.monthlyRemittance;
  borrowed.isApproved = event.params.isApproved;
  borrowed.lender = event.params.lender.toHexString();
  borrowed.borrower = event.params.borrower.toHexString();
  borrowed.loanId = event.params.loanId;
  borrowed.loan = event.params.loanId.toHex();

  borrowed.borrowerId = event.params.borrowId;
  borrowed.nftCollateralId = event.params.nftCollateralId.toString();
  borrowed.save();

  let user = User.load(event.params.borrower.toHexString());
  if (!user) {
    user = new User(event.params.borrower.toHexString());
    user.save();
  }
}

export function handleLoanWithdrawn(event: LoanWithdrawnEvent): void {
  let loan = Loan.load(event.params.loanId.toHex());
  if (loan) {
    let loanContract = RealIncomLoan.bind(event.address);
    let amountSupplied = loanContract.try_loans(event.params.loanId);

    loan.amountSupplied = amountSupplied.value.getAmountSupplied();
    loan.save();
  }
}

export function handleMoneyBorrowed(event: MoneyBorrowedEvent): void {
  let borrowed = new Borrowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  borrowed.amountBorrowed = event.params.amountBorrowed;
  borrowed.interestRate = event.params.interestRate;
  borrowed.loanDuration = event.params.loanDuration;
  borrowed.monthlyRemittance = event.params.monthlyRemittance;
  borrowed.isApproved = event.params.isApproved;
  borrowed.lender = event.params.lender.toHexString();
  borrowed.loanId = event.params.loanId;
  borrowed.borrowerId = event.params.borrowerId;
  borrowed.save();
}

export function handleMoneyTopped(event: MoneyToppedEvent): void {
  let loan = Loan.load(event.params.loanId.toHex());
  if (loan) {
    loan.loanId = event.params.loanId;
    let loanContract = RealIncomLoan.bind(event.address);
    let amountSupplied = loanContract.try_loans(event.params.loanId);

    loan.amountSupplied = amountSupplied.value.getAmountSupplied();
    loan.lender = event.params.sender.toHexString();
    loan.save();
  }
}

export function handleRealIncomLoanValueReceived(
  event: RealIncomLoanValueReceivedEvent
): void {}

export function handleRealIncomLoanValueSent(
  event: RealIncomLoanValueSentEvent
): void {}
