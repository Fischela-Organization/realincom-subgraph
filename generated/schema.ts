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

  get productAge(): BigInt | null {
    let value = this.get("productAge");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set productAge(value: BigInt | null) {
    if (!value) {
      this.unset("productAge");
    } else {
      this.set("productAge", Value.fromBigInt(<BigInt>value));
    }
  }

  get monthlyExpenses(): BigInt | null {
    let value = this.get("monthlyExpenses");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set monthlyExpenses(value: BigInt | null) {
    if (!value) {
      this.unset("monthlyExpenses");
    } else {
      this.set("monthlyExpenses", Value.fromBigInt(<BigInt>value));
    }
  }

  get monthlyRevenue(): BigInt | null {
    let value = this.get("monthlyRevenue");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set monthlyRevenue(value: BigInt | null) {
    if (!value) {
      this.unset("monthlyRevenue");
    } else {
      this.set("monthlyRevenue", Value.fromBigInt(<BigInt>value));
    }
  }

  get monthlyTraffic(): BigInt | null {
    let value = this.get("monthlyTraffic");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set monthlyTraffic(value: BigInt | null) {
    if (!value) {
      this.unset("monthlyTraffic");
    } else {
      this.set("monthlyTraffic", Value.fromBigInt(<BigInt>value));
    }
  }

  get location(): string | null {
    let value = this.get("location");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set location(value: string | null) {
    if (!value) {
      this.unset("location");
    } else {
      this.set("location", Value.fromString(<string>value));
    }
  }

  get productLink(): string | null {
    let value = this.get("productLink");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set productLink(value: string | null) {
    if (!value) {
      this.unset("productLink");
    } else {
      this.set("productLink", Value.fromString(<string>value));
    }
  }
}

export class Loan extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Loan entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Loan must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Loan", id.toString(), this);
    }
  }

  static load(id: string): Loan | null {
    return changetype<Loan | null>(store.get("Loan", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountSupplied(): BigInt | null {
    let value = this.get("amountSupplied");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountSupplied(value: BigInt | null) {
    if (!value) {
      this.unset("amountSupplied");
    } else {
      this.set("amountSupplied", Value.fromBigInt(<BigInt>value));
    }
  }

  get interestRate(): BigInt | null {
    let value = this.get("interestRate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set interestRate(value: BigInt | null) {
    if (!value) {
      this.unset("interestRate");
    } else {
      this.set("interestRate", Value.fromBigInt(<BigInt>value));
    }
  }

  get loanDuration(): BigInt | null {
    let value = this.get("loanDuration");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loanDuration(value: BigInt | null) {
    if (!value) {
      this.unset("loanDuration");
    } else {
      this.set("loanDuration", Value.fromBigInt(<BigInt>value));
    }
  }

  get toBePaidMonthly(): BigInt | null {
    let value = this.get("toBePaidMonthly");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set toBePaidMonthly(value: BigInt | null) {
    if (!value) {
      this.unset("toBePaidMonthly");
    } else {
      this.set("toBePaidMonthly", Value.fromBigInt(<BigInt>value));
    }
  }

  get borrowedLoans(): Array<string> | null {
    let value = this.get("borrowedLoans");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set borrowedLoans(value: Array<string> | null) {
    if (!value) {
      this.unset("borrowedLoans");
    } else {
      this.set("borrowedLoans", Value.fromStringArray(<Array<string>>value));
    }
  }

  get roi(): BigInt | null {
    let value = this.get("roi");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set roi(value: BigInt | null) {
    if (!value) {
      this.unset("roi");
    } else {
      this.set("roi", Value.fromBigInt(<BigInt>value));
    }
  }

  get lender(): string {
    let value = this.get("lender");
    return value!.toString();
  }

  set lender(value: string) {
    this.set("lender", Value.fromString(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value!.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get loanId(): BigInt | null {
    let value = this.get("loanId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loanId(value: BigInt | null) {
    if (!value) {
      this.unset("loanId");
    } else {
      this.set("loanId", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Borrowed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Borrowed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Borrowed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Borrowed", id.toString(), this);
    }
  }

  static load(id: string): Borrowed | null {
    return changetype<Borrowed | null>(store.get("Borrowed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountBorrowed(): BigInt | null {
    let value = this.get("amountBorrowed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountBorrowed(value: BigInt | null) {
    if (!value) {
      this.unset("amountBorrowed");
    } else {
      this.set("amountBorrowed", Value.fromBigInt(<BigInt>value));
    }
  }

  get interestRate(): BigInt | null {
    let value = this.get("interestRate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set interestRate(value: BigInt | null) {
    if (!value) {
      this.unset("interestRate");
    } else {
      this.set("interestRate", Value.fromBigInt(<BigInt>value));
    }
  }

  get loanDuration(): BigInt | null {
    let value = this.get("loanDuration");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loanDuration(value: BigInt | null) {
    if (!value) {
      this.unset("loanDuration");
    } else {
      this.set("loanDuration", Value.fromBigInt(<BigInt>value));
    }
  }

  get monthlyRemittance(): BigInt | null {
    let value = this.get("monthlyRemittance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set monthlyRemittance(value: BigInt | null) {
    if (!value) {
      this.unset("monthlyRemittance");
    } else {
      this.set("monthlyRemittance", Value.fromBigInt(<BigInt>value));
    }
  }

  get isApproved(): boolean {
    let value = this.get("isApproved");
    return value!.toBoolean();
  }

  set isApproved(value: boolean) {
    this.set("isApproved", Value.fromBoolean(value));
  }

  get lender(): string | null {
    let value = this.get("lender");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lender(value: string | null) {
    if (!value) {
      this.unset("lender");
    } else {
      this.set("lender", Value.fromString(<string>value));
    }
  }

  get borrower(): string | null {
    let value = this.get("borrower");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set borrower(value: string | null) {
    if (!value) {
      this.unset("borrower");
    } else {
      this.set("borrower", Value.fromString(<string>value));
    }
  }

  get loanId(): BigInt | null {
    let value = this.get("loanId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loanId(value: BigInt | null) {
    if (!value) {
      this.unset("loanId");
    } else {
      this.set("loanId", Value.fromBigInt(<BigInt>value));
    }
  }

  get loan(): string | null {
    let value = this.get("loan");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set loan(value: string | null) {
    if (!value) {
      this.unset("loan");
    } else {
      this.set("loan", Value.fromString(<string>value));
    }
  }

  get borrowerId(): BigInt | null {
    let value = this.get("borrowerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set borrowerId(value: BigInt | null) {
    if (!value) {
      this.unset("borrowerId");
    } else {
      this.set("borrowerId", Value.fromBigInt(<BigInt>value));
    }
  }

  get nftCollateralId(): string | null {
    let value = this.get("nftCollateralId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set nftCollateralId(value: string | null) {
    if (!value) {
      this.unset("nftCollateralId");
    } else {
      this.set("nftCollateralId", Value.fromString(<string>value));
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

  get createdLoans(): Array<string> | null {
    let value = this.get("createdLoans");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set createdLoans(value: Array<string> | null) {
    if (!value) {
      this.unset("createdLoans");
    } else {
      this.set("createdLoans", Value.fromStringArray(<Array<string>>value));
    }
  }

  get borrowedLoans(): Array<string> | null {
    let value = this.get("borrowedLoans");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set borrowedLoans(value: Array<string> | null) {
    if (!value) {
      this.unset("borrowedLoans");
    } else {
      this.set("borrowedLoans", Value.fromStringArray(<Array<string>>value));
    }
  }
}
