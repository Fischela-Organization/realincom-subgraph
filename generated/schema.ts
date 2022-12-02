// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DigiSale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DigiSale entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DigiSale must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DigiSale", id.toString(), this);
    }
  }

  static load(id: string): DigiSale | null {
    return changetype<DigiSale | null>(store.get("DigiSale", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get auctionId(): string | null {
    let value = this.get("auctionId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auctionId(value: string | null) {
    if (!value) {
      this.unset("auctionId");
    } else {
      this.set("auctionId", Value.fromString(<string>value));
    }
  }

  get digi(): string {
    let value = this.get("digi");
    return value!.toString();
  }

  set digi(value: string) {
    this.set("digi", Value.fromString(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }

  get isOnSale(): boolean {
    let value = this.get("isOnSale");
    return value!.toBoolean();
  }

  set isOnSale(value: boolean) {
    this.set("isOnSale", Value.fromBoolean(value));
  }

  get startTime(): BigInt | null {
    let value = this.get("startTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set startTime(value: BigInt | null) {
    if (!value) {
      this.unset("startTime");
    } else {
      this.set("startTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (!value) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get duration(): BigInt | null {
    let value = this.get("duration");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set duration(value: BigInt | null) {
    if (!value) {
      this.unset("duration");
    } else {
      this.set("duration", Value.fromBigInt(<BigInt>value));
    }
  }

  get buyer(): string | null {
    let value = this.get("buyer");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set buyer(value: string | null) {
    if (!value) {
      this.unset("buyer");
    } else {
      this.set("buyer", Value.fromString(<string>value));
    }
  }

  get seller(): string | null {
    let value = this.get("seller");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set seller(value: string | null) {
    if (!value) {
      this.unset("seller");
    } else {
      this.set("seller", Value.fromString(<string>value));
    }
  }
}

export class Dispute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dispute entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Dispute must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Dispute", id.toString(), this);
    }
  }

  static load(id: string): Dispute | null {
    return changetype<Dispute | null>(store.get("Dispute", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get payee(): string | null {
    let value = this.get("payee");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set payee(value: string | null) {
    if (!value) {
      this.unset("payee");
    } else {
      this.set("payee", Value.fromString(<string>value));
    }
  }

  get disputeReporter(): string | null {
    let value = this.get("disputeReporter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set disputeReporter(value: string | null) {
    if (!value) {
      this.unset("disputeReporter");
    } else {
      this.set("disputeReporter", Value.fromString(<string>value));
    }
  }

  get auctionId(): string | null {
    let value = this.get("auctionId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set auctionId(value: string | null) {
    if (!value) {
      this.unset("auctionId");
    } else {
      this.set("auctionId", Value.fromString(<string>value));
    }
  }

  get message(): string | null {
    let value = this.get("message");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set message(value: string | null) {
    if (!value) {
      this.unset("message");
    } else {
      this.set("message", Value.fromString(<string>value));
    }
  }

  get email(): string | null {
    let value = this.get("email");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set email(value: string | null) {
    if (!value) {
      this.unset("email");
    } else {
      this.set("email", Value.fromString(<string>value));
    }
  }

  get phone(): string | null {
    let value = this.get("phone");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set phone(value: string | null) {
    if (!value) {
      this.unset("phone");
    } else {
      this.set("phone", Value.fromString(<string>value));
    }
  }

  get fundReceiver(): string | null {
    let value = this.get("fundReceiver");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fundReceiver(value: string | null) {
    if (!value) {
      this.unset("fundReceiver");
    } else {
      this.set("fundReceiver", Value.fromString(<string>value));
    }
  }

  get payment(): BigInt | null {
    let value = this.get("payment");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set payment(value: BigInt | null) {
    if (!value) {
      this.unset("payment");
    } else {
      this.set("payment", Value.fromBigInt(<BigInt>value));
    }
  }

  get disputeId(): string | null {
    let value = this.get("disputeId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set disputeId(value: string | null) {
    if (!value) {
      this.unset("disputeId");
    } else {
      this.set("disputeId", Value.fromString(<string>value));
    }
  }
}

export class Digi extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Digi entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Digi must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Digi", id.toString(), this);
    }
  }

  static load(id: string): Digi | null {
    return changetype<Digi | null>(store.get("Digi", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadataURI(): string {
    let value = this.get("metadataURI");
    return value!.toString();
  }

  set metadataURI(value: string) {
    this.set("metadataURI", Value.fromString(value));
  }

  get baseURI(): string | null {
    let value = this.get("baseURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set baseURI(value: string | null) {
    if (!value) {
      this.unset("baseURI");
    } else {
      this.set("baseURI", Value.fromString(<string>value));
    }
  }

  get created(): BigInt | null {
    let value = this.get("created");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set created(value: BigInt | null) {
    if (!value) {
      this.unset("created");
    } else {
      this.set("created", Value.fromBigInt(<BigInt>value));
    }
  }

  get isOnSale(): boolean {
    let value = this.get("isOnSale");
    return value!.toBoolean();
  }

  set isOnSale(value: boolean) {
    this.set("isOnSale", Value.fromBoolean(value));
  }

  get ownerAddress(): string {
    let value = this.get("ownerAddress");
    return value!.toString();
  }

  set ownerAddress(value: string) {
    this.set("ownerAddress", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get worth(): BigInt | null {
    let value = this.get("worth");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set worth(value: BigInt | null) {
    if (!value) {
      this.unset("worth");
    } else {
      this.set("worth", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get networth(): BigInt | null {
    let value = this.get("networth");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set networth(value: BigInt | null) {
    if (!value) {
      this.unset("networth");
    } else {
      this.set("networth", Value.fromBigInt(<BigInt>value));
    }
  }

  get digis(): Array<string> | null {
    let value = this.get("digis");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set digis(value: Array<string> | null) {
    if (!value) {
      this.unset("digis");
    } else {
      this.set("digis", Value.fromStringArray(<Array<string>>value));
    }
  }

  get disputes(): Array<string> | null {
    let value = this.get("disputes");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set disputes(value: Array<string> | null) {
    if (!value) {
      this.unset("disputes");
    } else {
      this.set("disputes", Value.fromStringArray(<Array<string>>value));
    }
  }

  get created(): Array<string> | null {
    let value = this.get("created");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set created(value: Array<string> | null) {
    if (!value) {
      this.unset("created");
    } else {
      this.set("created", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class LoanCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LoanCreated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LoanCreated", id.toString(), this);
    }
  }

  static load(id: string): LoanCreated | null {
    return changetype<LoanCreated | null>(store.get("LoanCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountSupplied(): BigInt {
    let value = this.get("amountSupplied");
    return value!.toBigInt();
  }

  set amountSupplied(value: BigInt) {
    this.set("amountSupplied", Value.fromBigInt(value));
  }

  get interestRate(): BigInt {
    let value = this.get("interestRate");
    return value!.toBigInt();
  }

  set interestRate(value: BigInt) {
    this.set("interestRate", Value.fromBigInt(value));
  }

  get loanDuration(): BigInt {
    let value = this.get("loanDuration");
    return value!.toBigInt();
  }

  set loanDuration(value: BigInt) {
    this.set("loanDuration", Value.fromBigInt(value));
  }

  get toBePaidMonthly(): BigInt {
    let value = this.get("toBePaidMonthly");
    return value!.toBigInt();
  }

  set toBePaidMonthly(value: BigInt) {
    this.set("toBePaidMonthly", Value.fromBigInt(value));
  }

  get roi(): BigInt {
    let value = this.get("roi");
    return value!.toBigInt();
  }

  set roi(value: BigInt) {
    this.set("roi", Value.fromBigInt(value));
  }

  get lender(): Bytes {
    let value = this.get("lender");
    return value!.toBytes();
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value!.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }
}

export class LoanPayed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanPayed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LoanPayed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LoanPayed", id.toString(), this);
    }
  }

  static load(id: string): LoanPayed | null {
    return changetype<LoanPayed | null>(store.get("LoanPayed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountToPayBack(): BigInt {
    let value = this.get("amountToPayBack");
    return value!.toBigInt();
  }

  set amountToPayBack(value: BigInt) {
    this.set("amountToPayBack", Value.fromBigInt(value));
  }

  get lender(): Bytes {
    let value = this.get("lender");
    return value!.toBytes();
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get borrower(): Bytes {
    let value = this.get("borrower");
    return value!.toBytes();
  }

  set borrower(value: Bytes) {
    this.set("borrower", Value.fromBytes(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }

  get borrowerId(): BigInt {
    let value = this.get("borrowerId");
    return value!.toBigInt();
  }

  set borrowerId(value: BigInt) {
    this.set("borrowerId", Value.fromBigInt(value));
  }
}

export class LoanRequest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanRequest entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LoanRequest must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LoanRequest", id.toString(), this);
    }
  }

  static load(id: string): LoanRequest | null {
    return changetype<LoanRequest | null>(store.get("LoanRequest", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountBorrowed(): BigInt {
    let value = this.get("amountBorrowed");
    return value!.toBigInt();
  }

  set amountBorrowed(value: BigInt) {
    this.set("amountBorrowed", Value.fromBigInt(value));
  }

  get interestRate(): BigInt {
    let value = this.get("interestRate");
    return value!.toBigInt();
  }

  set interestRate(value: BigInt) {
    this.set("interestRate", Value.fromBigInt(value));
  }

  get loanDuration(): BigInt {
    let value = this.get("loanDuration");
    return value!.toBigInt();
  }

  set loanDuration(value: BigInt) {
    this.set("loanDuration", Value.fromBigInt(value));
  }

  get monthlyRemittance(): BigInt {
    let value = this.get("monthlyRemittance");
    return value!.toBigInt();
  }

  set monthlyRemittance(value: BigInt) {
    this.set("monthlyRemittance", Value.fromBigInt(value));
  }

  get isApproved(): boolean {
    let value = this.get("isApproved");
    return value!.toBoolean();
  }

  set isApproved(value: boolean) {
    this.set("isApproved", Value.fromBoolean(value));
  }

  get lender(): Bytes {
    let value = this.get("lender");
    return value!.toBytes();
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get borrower(): Bytes {
    let value = this.get("borrower");
    return value!.toBytes();
  }

  set borrower(value: Bytes) {
    this.set("borrower", Value.fromBytes(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }

  get borrowId(): BigInt {
    let value = this.get("borrowId");
    return value!.toBigInt();
  }

  set borrowId(value: BigInt) {
    this.set("borrowId", Value.fromBigInt(value));
  }

  get nftCollateralId(): BigInt {
    let value = this.get("nftCollateralId");
    return value!.toBigInt();
  }

  set nftCollateralId(value: BigInt) {
    this.set("nftCollateralId", Value.fromBigInt(value));
  }
}

export class LoanWithdrawn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LoanWithdrawn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LoanWithdrawn must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LoanWithdrawn", id.toString(), this);
    }
  }

  static load(id: string): LoanWithdrawn | null {
    return changetype<LoanWithdrawn | null>(store.get("LoanWithdrawn", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get lender(): Bytes {
    let value = this.get("lender");
    return value!.toBytes();
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }
}

export class MoneyBorrowed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MoneyBorrowed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MoneyBorrowed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MoneyBorrowed", id.toString(), this);
    }
  }

  static load(id: string): MoneyBorrowed | null {
    return changetype<MoneyBorrowed | null>(store.get("MoneyBorrowed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountBorrowed(): BigInt {
    let value = this.get("amountBorrowed");
    return value!.toBigInt();
  }

  set amountBorrowed(value: BigInt) {
    this.set("amountBorrowed", Value.fromBigInt(value));
  }

  get interestRate(): BigInt {
    let value = this.get("interestRate");
    return value!.toBigInt();
  }

  set interestRate(value: BigInt) {
    this.set("interestRate", Value.fromBigInt(value));
  }

  get loanDuration(): BigInt {
    let value = this.get("loanDuration");
    return value!.toBigInt();
  }

  set loanDuration(value: BigInt) {
    this.set("loanDuration", Value.fromBigInt(value));
  }

  get monthlyRemittance(): BigInt {
    let value = this.get("monthlyRemittance");
    return value!.toBigInt();
  }

  set monthlyRemittance(value: BigInt) {
    this.set("monthlyRemittance", Value.fromBigInt(value));
  }

  get isApproved(): boolean {
    let value = this.get("isApproved");
    return value!.toBoolean();
  }

  set isApproved(value: boolean) {
    this.set("isApproved", Value.fromBoolean(value));
  }

  get lender(): Bytes {
    let value = this.get("lender");
    return value!.toBytes();
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }

  get borrowerId(): BigInt {
    let value = this.get("borrowerId");
    return value!.toBigInt();
  }

  set borrowerId(value: BigInt) {
    this.set("borrowerId", Value.fromBigInt(value));
  }
}

export class MoneyTopped extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MoneyTopped entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MoneyTopped must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MoneyTopped", id.toString(), this);
    }
  }

  static load(id: string): MoneyTopped | null {
    return changetype<MoneyTopped | null>(store.get("MoneyTopped", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get loanId(): BigInt {
    let value = this.get("loanId");
    return value!.toBigInt();
  }

  set loanId(value: BigInt) {
    this.set("loanId", Value.fromBigInt(value));
  }

  get amountTopped(): BigInt {
    let value = this.get("amountTopped");
    return value!.toBigInt();
  }

  set amountTopped(value: BigInt) {
    this.set("amountTopped", Value.fromBigInt(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class RealIncomLoanValueReceived extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save RealIncomLoanValueReceived entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RealIncomLoanValueReceived must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RealIncomLoanValueReceived", id.toString(), this);
    }
  }

  static load(id: string): RealIncomLoanValueReceived | null {
    return changetype<RealIncomLoanValueReceived | null>(
      store.get("RealIncomLoanValueReceived", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class RealIncomLoanValueSent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save RealIncomLoanValueSent entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RealIncomLoanValueSent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RealIncomLoanValueSent", id.toString(), this);
    }
  }

  static load(id: string): RealIncomLoanValueSent | null {
    return changetype<RealIncomLoanValueSent | null>(
      store.get("RealIncomLoanValueSent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get val(): BigInt {
    let value = this.get("val");
    return value!.toBigInt();
  }

  set val(value: BigInt) {
    this.set("val", Value.fromBigInt(value));
  }
}

export class AddressManagerUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AddressManagerUpdated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AddressManagerUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AddressManagerUpdated", id.toString(), this);
    }
  }

  static load(id: string): AddressManagerUpdated | null {
    return changetype<AddressManagerUpdated | null>(
      store.get("AddressManagerUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addressManagerAddress(): Bytes {
    let value = this.get("addressManagerAddress");
    return value!.toBytes();
  }

  set addressManagerAddress(value: Bytes) {
    this.set("addressManagerAddress", Value.fromBytes(value));
  }

  get innitiator(): Bytes {
    let value = this.get("innitiator");
    return value!.toBytes();
  }

  set innitiator(value: Bytes) {
    this.set("innitiator", Value.fromBytes(value));
  }
}

export class AdminCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AdminCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AdminCreated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AdminCreated", id.toString(), this);
    }
  }

  static load(id: string): AdminCreated | null {
    return changetype<AdminCreated | null>(store.get("AdminCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get admin(): Bytes {
    let value = this.get("admin");
    return value!.toBytes();
  }

  set admin(value: Bytes) {
    this.set("admin", Value.fromBytes(value));
  }

  get isAdmin(): boolean {
    let value = this.get("isAdmin");
    return value!.toBoolean();
  }

  set isAdmin(value: boolean) {
    this.set("isAdmin", Value.fromBoolean(value));
  }
}
