// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LoanCreated extends ethereum.Event {
  get params(): LoanCreated__Params {
    return new LoanCreated__Params(this);
  }
}

export class LoanCreated__Params {
  _event: LoanCreated;

  constructor(event: LoanCreated) {
    this._event = event;
  }

  get amountSupplied(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interestRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get loanDuration(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get toBePaidMonthly(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get roi(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get lender(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get isActive(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get loanId(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class LoanPayed extends ethereum.Event {
  get params(): LoanPayed__Params {
    return new LoanPayed__Params(this);
  }
}

export class LoanPayed__Params {
  _event: LoanPayed;

  constructor(event: LoanPayed) {
    this._event = event;
  }

  get amountToPayBack(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get borrower(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get loanId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get borrowerId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class LoanRequest extends ethereum.Event {
  get params(): LoanRequest__Params {
    return new LoanRequest__Params(this);
  }
}

export class LoanRequest__Params {
  _event: LoanRequest;

  constructor(event: LoanRequest) {
    this._event = event;
  }

  get amountBorrowed(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interestRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get loanDuration(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get monthlyRemittance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get isApproved(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get lender(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get borrower(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get loanId(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get borrowId(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get nftCollateralId(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class LoanWithdrawn extends ethereum.Event {
  get params(): LoanWithdrawn__Params {
    return new LoanWithdrawn__Params(this);
  }
}

export class LoanWithdrawn__Params {
  _event: LoanWithdrawn;

  constructor(event: LoanWithdrawn) {
    this._event = event;
  }

  get _amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get loanId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MoneyBorrowed extends ethereum.Event {
  get params(): MoneyBorrowed__Params {
    return new MoneyBorrowed__Params(this);
  }
}

export class MoneyBorrowed__Params {
  _event: MoneyBorrowed;

  constructor(event: MoneyBorrowed) {
    this._event = event;
  }

  get amountBorrowed(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get interestRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get loanDuration(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get monthlyRemittance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get isApproved(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get lender(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get loanId(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get borrowerId(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class MoneyTopped extends ethereum.Event {
  get params(): MoneyTopped__Params {
    return new MoneyTopped__Params(this);
  }
}

export class MoneyTopped__Params {
  _event: MoneyTopped;

  constructor(event: MoneyTopped) {
    this._event = event;
  }

  get loanId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountTopped(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RealIncomLoanValueReceived extends ethereum.Event {
  get params(): RealIncomLoanValueReceived__Params {
    return new RealIncomLoanValueReceived__Params(this);
  }
}

export class RealIncomLoanValueReceived__Params {
  _event: RealIncomLoanValueReceived;

  constructor(event: RealIncomLoanValueReceived) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RealIncomLoanValueSent extends ethereum.Event {
  get params(): RealIncomLoanValueSent__Params {
    return new RealIncomLoanValueSent__Params(this);
  }
}

export class RealIncomLoanValueSent__Params {
  _event: RealIncomLoanValueSent;

  constructor(event: RealIncomLoanValueSent) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get val(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RealIncomLoan__borrowersResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;
  value5: Address;
  value6: Address;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
    value5: Address,
    value6: Address,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }

  getAmountBorrowed(): BigInt {
    return this.value0;
  }

  getInterestRate(): BigInt {
    return this.value1;
  }

  getLoanDuration(): BigInt {
    return this.value2;
  }

  getMonthlyRemittance(): BigInt {
    return this.value3;
  }

  getIsApproved(): boolean {
    return this.value4;
  }

  getLender(): Address {
    return this.value5;
  }

  getBorrower(): Address {
    return this.value6;
  }

  getLoanId(): BigInt {
    return this.value7;
  }

  getCollateralTokenId(): BigInt {
    return this.value8;
  }
}

export class RealIncomLoan__loansResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: boolean;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: boolean,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }

  getAmountSupplied(): BigInt {
    return this.value0;
  }

  getInterestRate(): BigInt {
    return this.value1;
  }

  getLoanDuration(): BigInt {
    return this.value2;
  }

  getToBePaidMonthly(): BigInt {
    return this.value3;
  }

  getRoi(): BigInt {
    return this.value4;
  }

  getLender(): Address {
    return this.value5;
  }

  getIsActive(): boolean {
    return this.value6;
  }

  getLentOut(): BigInt {
    return this.value7;
  }
}

export class RealIncomLoan extends ethereum.SmartContract {
  static bind(address: Address): RealIncomLoan {
    return new RealIncomLoan("RealIncomLoan", address);
  }

  borrowers(param0: BigInt): RealIncomLoan__borrowersResult {
    let result = super.call(
      "borrowers",
      "borrowers(uint256):(uint256,uint256,uint256,uint256,bool,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RealIncomLoan__borrowersResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_borrowers(
    param0: BigInt
  ): ethereum.CallResult<RealIncomLoan__borrowersResult> {
    let result = super.tryCall(
      "borrowers",
      "borrowers(uint256):(uint256,uint256,uint256,uint256,bool,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomLoan__borrowersResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }

  loans(param0: BigInt): RealIncomLoan__loansResult {
    let result = super.call(
      "loans",
      "loans(uint256):(uint256,uint256,uint256,uint256,uint256,address,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RealIncomLoan__loansResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toBoolean(),
      result[7].toBigInt()
    );
  }

  try_loans(param0: BigInt): ethereum.CallResult<RealIncomLoan__loansResult> {
    let result = super.tryCall(
      "loans",
      "loans(uint256):(uint256,uint256,uint256,uint256,uint256,address,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomLoan__loansResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toBoolean(),
        value[7].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get nftContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get accessControllerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class ApplyForLoanCall extends ethereum.Call {
  get inputs(): ApplyForLoanCall__Inputs {
    return new ApplyForLoanCall__Inputs(this);
  }

  get outputs(): ApplyForLoanCall__Outputs {
    return new ApplyForLoanCall__Outputs(this);
  }
}

export class ApplyForLoanCall__Inputs {
  _call: ApplyForLoanCall;

  constructor(call: ApplyForLoanCall) {
    this._call = call;
  }

  get collateralTokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _loanId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ApplyForLoanCall__Outputs {
  _call: ApplyForLoanCall;

  constructor(call: ApplyForLoanCall) {
    this._call = call;
  }
}

export class ApproveLoanCall extends ethereum.Call {
  get inputs(): ApproveLoanCall__Inputs {
    return new ApproveLoanCall__Inputs(this);
  }

  get outputs(): ApproveLoanCall__Outputs {
    return new ApproveLoanCall__Outputs(this);
  }
}

export class ApproveLoanCall__Inputs {
  _call: ApproveLoanCall;

  constructor(call: ApproveLoanCall) {
    this._call = call;
  }

  get borrowerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveLoanCall__Outputs {
  _call: ApproveLoanCall;

  constructor(call: ApproveLoanCall) {
    this._call = call;
  }
}

export class CreateLoanCall extends ethereum.Call {
  get inputs(): CreateLoanCall__Inputs {
    return new CreateLoanCall__Inputs(this);
  }

  get outputs(): CreateLoanCall__Outputs {
    return new CreateLoanCall__Outputs(this);
  }
}

export class CreateLoanCall__Inputs {
  _call: CreateLoanCall;

  constructor(call: CreateLoanCall) {
    this._call = call;
  }

  get interestRate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanDuration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get toBePaidMonthly(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get roi(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateLoanCall__Outputs {
  _call: CreateLoanCall;

  constructor(call: CreateLoanCall) {
    this._call = call;
  }
}

export class PayBackLoanCall extends ethereum.Call {
  get inputs(): PayBackLoanCall__Inputs {
    return new PayBackLoanCall__Inputs(this);
  }

  get outputs(): PayBackLoanCall__Outputs {
    return new PayBackLoanCall__Outputs(this);
  }
}

export class PayBackLoanCall__Inputs {
  _call: PayBackLoanCall;

  constructor(call: PayBackLoanCall) {
    this._call = call;
  }

  get loanId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get borrowerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PayBackLoanCall__Outputs {
  _call: PayBackLoanCall;

  constructor(call: PayBackLoanCall) {
    this._call = call;
  }
}

export class SendViaCallCall extends ethereum.Call {
  get inputs(): SendViaCallCall__Inputs {
    return new SendViaCallCall__Inputs(this);
  }

  get outputs(): SendViaCallCall__Outputs {
    return new SendViaCallCall__Outputs(this);
  }
}

export class SendViaCallCall__Inputs {
  _call: SendViaCallCall;

  constructor(call: SendViaCallCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amountvalue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SendViaCallCall__Outputs {
  _call: SendViaCallCall;

  constructor(call: SendViaCallCall) {
    this._call = call;
  }
}

export class TopUpLoanCall extends ethereum.Call {
  get inputs(): TopUpLoanCall__Inputs {
    return new TopUpLoanCall__Inputs(this);
  }

  get outputs(): TopUpLoanCall__Outputs {
    return new TopUpLoanCall__Outputs(this);
  }
}

export class TopUpLoanCall__Inputs {
  _call: TopUpLoanCall;

  constructor(call: TopUpLoanCall) {
    this._call = call;
  }

  get loanId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TopUpLoanCall__Outputs {
  _call: TopUpLoanCall;

  constructor(call: TopUpLoanCall) {
    this._call = call;
  }
}

export class WithdrawLoanCall extends ethereum.Call {
  get inputs(): WithdrawLoanCall__Inputs {
    return new WithdrawLoanCall__Inputs(this);
  }

  get outputs(): WithdrawLoanCall__Outputs {
    return new WithdrawLoanCall__Outputs(this);
  }
}

export class WithdrawLoanCall__Inputs {
  _call: WithdrawLoanCall;

  constructor(call: WithdrawLoanCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get loanId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawLoanCall__Outputs {
  _call: WithdrawLoanCall;

  constructor(call: WithdrawLoanCall) {
    this._call = call;
  }
}
