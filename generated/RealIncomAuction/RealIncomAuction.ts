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

export class AccessControlContractUpdated extends ethereum.Event {
  get params(): AccessControlContractUpdated__Params {
    return new AccessControlContractUpdated__Params(this);
  }
}

export class AccessControlContractUpdated__Params {
  _event: AccessControlContractUpdated;

  constructor(event: AccessControlContractUpdated) {
    this._event = event;
  }

  get _accessController(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AuctionBalanceWithdrawn extends ethereum.Event {
  get params(): AuctionBalanceWithdrawn__Params {
    return new AuctionBalanceWithdrawn__Params(this);
  }
}

export class AuctionBalanceWithdrawn__Params {
  _event: AuctionBalanceWithdrawn;

  constructor(event: AuctionBalanceWithdrawn) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AuctionCancelled extends ethereum.Event {
  get params(): AuctionCancelled__Params {
    return new AuctionCancelled__Params(this);
  }
}

export class AuctionCancelled__Params {
  _event: AuctionCancelled;

  constructor(event: AuctionCancelled) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get startTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reservedPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get intergrityConfirmed(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get resulted(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get endTime(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get isOnSale(): boolean {
    return this._event.parameters[8].value.toBoolean();
  }

  get sellType(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class AuctionEndTimeModified extends ethereum.Event {
  get params(): AuctionEndTimeModified__Params {
    return new AuctionEndTimeModified__Params(this);
  }
}

export class AuctionEndTimeModified__Params {
  _event: AuctionEndTimeModified;

  constructor(event: AuctionEndTimeModified) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get endTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AuctionResulted extends ethereum.Event {
  get params(): AuctionResulted__Params {
    return new AuctionResulted__Params(this);
  }
}

export class AuctionResulted__Params {
  _event: AuctionResulted;

  constructor(event: AuctionResulted) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get winner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get winningBid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get auctionId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class AuctionStartTimeModified extends ethereum.Event {
  get params(): AuctionStartTimeModified__Params {
    return new AuctionStartTimeModified__Params(this);
  }
}

export class AuctionStartTimeModified__Params {
  _event: AuctionStartTimeModified;

  constructor(event: AuctionStartTimeModified) {
    this._event = event;
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get startTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BidPlaced extends ethereum.Event {
  get params(): BidPlaced__Params {
    return new BidPlaced__Params(this);
  }
}

export class BidPlaced__Params {
  _event: BidPlaced;

  constructor(event: BidPlaced) {
    this._event = event;
  }

  get BidAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get Bidder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bidTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get auctionId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NFTContractUpdated extends ethereum.Event {
  get params(): NFTContractUpdated__Params {
    return new NFTContractUpdated__Params(this);
  }
}

export class NFTContractUpdated__Params {
  _event: NFTContractUpdated;

  constructor(event: NFTContractUpdated) {
    this._event = event;
  }

  get _nftContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ResultsConfirmed extends ethereum.Event {
  get params(): ResultsConfirmed__Params {
    return new ResultsConfirmed__Params(this);
  }
}

export class ResultsConfirmed__Params {
  _event: ResultsConfirmed;

  constructor(event: ResultsConfirmed) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get isOnsale(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get intergrityConfirmed(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ValueReceived extends ethereum.Event {
  get params(): ValueReceived__Params {
    return new ValueReceived__Params(this);
  }
}

export class ValueReceived__Params {
  _event: ValueReceived;

  constructor(event: ValueReceived) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ValueSent extends ethereum.Event {
  get params(): ValueSent__Params {
    return new ValueSent__Params(this);
  }
}

export class ValueSent__Params {
  _event: ValueSent;

  constructor(event: ValueSent) {
    this._event = event;
  }

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get val(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RealIncomAuction__auctionsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;
  value4: boolean;
  value5: BigInt;
  value6: Address;
  value7: Address;
  value8: boolean;
  value9: string;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: boolean,
    value4: boolean,
    value5: BigInt,
    value6: Address,
    value7: Address,
    value8: boolean,
    value9: string
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
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    map.set("value9", ethereum.Value.fromString(this.value9));
    return map;
  }

  getTokenId(): BigInt {
    return this.value0;
  }

  getStartTime(): BigInt {
    return this.value1;
  }

  getReservedPrice(): BigInt {
    return this.value2;
  }

  getIntergrityConfirmed(): boolean {
    return this.value3;
  }

  getResulted(): boolean {
    return this.value4;
  }

  getEndTime(): BigInt {
    return this.value5;
  }

  getSeller(): Address {
    return this.value6;
  }

  getBuyer(): Address {
    return this.value7;
  }

  getIsOnSale(): boolean {
    return this.value8;
  }

  getSellType(): string {
    return this.value9;
  }
}

export class RealIncomAuction__fetchAuctionResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;
  value3: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: boolean,
    value3: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }

  getTokenId(): BigInt {
    return this.value0;
  }

  getStartTime(): BigInt {
    return this.value1;
  }

  getIntergrityConfirmed(): boolean {
    return this.value2;
  }

  getSeller(): Address {
    return this.value3;
  }
}

export class RealIncomAuction__fetchBidResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getBidder(): Address {
    return this.value0;
  }

  getBid(): BigInt {
    return this.value1;
  }

  getBidTime(): BigInt {
    return this.value2;
  }
}

export class RealIncomAuction__highestBidsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getBidder(): Address {
    return this.value0;
  }

  getBid(): BigInt {
    return this.value1;
  }

  getBidTime(): BigInt {
    return this.value2;
  }
}

export class RealIncomAuction extends ethereum.SmartContract {
  static bind(address: Address): RealIncomAuction {
    return new RealIncomAuction("RealIncomAuction", address);
  }

  auctions(param0: BigInt): RealIncomAuction__auctionsResult {
    let result = super.call(
      "auctions",
      "auctions(uint256):(uint256,uint256,uint256,bool,bool,uint256,address,address,bool,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RealIncomAuction__auctionsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean(),
      result[4].toBoolean(),
      result[5].toBigInt(),
      result[6].toAddress(),
      result[7].toAddress(),
      result[8].toBoolean(),
      result[9].toString()
    );
  }

  try_auctions(
    param0: BigInt
  ): ethereum.CallResult<RealIncomAuction__auctionsResult> {
    let result = super.tryCall(
      "auctions",
      "auctions(uint256):(uint256,uint256,uint256,bool,bool,uint256,address,address,bool,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomAuction__auctionsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean(),
        value[4].toBoolean(),
        value[5].toBigInt(),
        value[6].toAddress(),
        value[7].toAddress(),
        value[8].toBoolean(),
        value[9].toString()
      )
    );
  }

  fetchAuction(_auctionId: BigInt): RealIncomAuction__fetchAuctionResult {
    let result = super.call(
      "fetchAuction",
      "fetchAuction(uint256):(uint256,uint256,bool,address)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );

    return new RealIncomAuction__fetchAuctionResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean(),
      result[3].toAddress()
    );
  }

  try_fetchAuction(
    _auctionId: BigInt
  ): ethereum.CallResult<RealIncomAuction__fetchAuctionResult> {
    let result = super.tryCall(
      "fetchAuction",
      "fetchAuction(uint256):(uint256,uint256,bool,address)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomAuction__fetchAuctionResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean(),
        value[3].toAddress()
      )
    );
  }

  fetchBid(_auctionId: BigInt): RealIncomAuction__fetchBidResult {
    let result = super.call(
      "fetchBid",
      "fetchBid(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );

    return new RealIncomAuction__fetchBidResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_fetchBid(
    _auctionId: BigInt
  ): ethereum.CallResult<RealIncomAuction__fetchBidResult> {
    let result = super.tryCall(
      "fetchBid",
      "fetchBid(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_auctionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomAuction__fetchBidResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  highestBids(param0: BigInt): RealIncomAuction__highestBidsResult {
    let result = super.call(
      "highestBids",
      "highestBids(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RealIncomAuction__highestBidsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_highestBids(
    param0: BigInt
  ): ethereum.CallResult<RealIncomAuction__highestBidsResult> {
    let result = super.tryCall(
      "highestBids",
      "highestBids(uint256):(address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomAuction__highestBidsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setAuctionEndTime(_auctionId: BigInt, _newEndTime: BigInt): BigInt {
    let result = super.call(
      "setAuctionEndTime",
      "setAuctionEndTime(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_auctionId),
        ethereum.Value.fromUnsignedBigInt(_newEndTime)
      ]
    );

    return result[0].toBigInt();
  }

  try_setAuctionEndTime(
    _auctionId: BigInt,
    _newEndTime: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setAuctionEndTime",
      "setAuctionEndTime(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_auctionId),
        ethereum.Value.fromUnsignedBigInt(_newEndTime)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setAuctionStartTime(_auctionId: BigInt, _newStartTime: BigInt): BigInt {
    let result = super.call(
      "setAuctionStartTime",
      "setAuctionStartTime(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_auctionId),
        ethereum.Value.fromUnsignedBigInt(_newStartTime)
      ]
    );

    return result[0].toBigInt();
  }

  try_setAuctionStartTime(
    _auctionId: BigInt,
    _newStartTime: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "setAuctionStartTime",
      "setAuctionStartTime(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_auctionId),
        ethereum.Value.fromUnsignedBigInt(_newStartTime)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  startAuction(
    tokenId: BigInt,
    startTime: BigInt,
    endTime: BigInt,
    reservedPrice: BigInt
  ): BigInt {
    let result = super.call(
      "startAuction",
      "startAuction(uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(startTime),
        ethereum.Value.fromUnsignedBigInt(endTime),
        ethereum.Value.fromUnsignedBigInt(reservedPrice)
      ]
    );

    return result[0].toBigInt();
  }

  try_startAuction(
    tokenId: BigInt,
    startTime: BigInt,
    endTime: BigInt,
    reservedPrice: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "startAuction",
      "startAuction(uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(startTime),
        ethereum.Value.fromUnsignedBigInt(endTime),
        ethereum.Value.fromUnsignedBigInt(reservedPrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get _incomNft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _accessController(): Address {
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

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class ConfirmResultsCall extends ethereum.Call {
  get inputs(): ConfirmResultsCall__Inputs {
    return new ConfirmResultsCall__Inputs(this);
  }

  get outputs(): ConfirmResultsCall__Outputs {
    return new ConfirmResultsCall__Outputs(this);
  }
}

export class ConfirmResultsCall__Inputs {
  _call: ConfirmResultsCall;

  constructor(call: ConfirmResultsCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConfirmResultsCall__Outputs {
  _call: ConfirmResultsCall;

  constructor(call: ConfirmResultsCall) {
    this._call = call;
  }
}

export class PlaceBidCall extends ethereum.Call {
  get inputs(): PlaceBidCall__Inputs {
    return new PlaceBidCall__Inputs(this);
  }

  get outputs(): PlaceBidCall__Outputs {
    return new PlaceBidCall__Outputs(this);
  }
}

export class PlaceBidCall__Inputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PlaceBidCall__Outputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ResolveAuctionCall extends ethereum.Call {
  get inputs(): ResolveAuctionCall__Inputs {
    return new ResolveAuctionCall__Inputs(this);
  }

  get outputs(): ResolveAuctionCall__Outputs {
    return new ResolveAuctionCall__Outputs(this);
  }
}

export class ResolveAuctionCall__Inputs {
  _call: ResolveAuctionCall;

  constructor(call: ResolveAuctionCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ResolveAuctionCall__Outputs {
  _call: ResolveAuctionCall;

  constructor(call: ResolveAuctionCall) {
    this._call = call;
  }
}

export class ResultAuctionCall extends ethereum.Call {
  get inputs(): ResultAuctionCall__Inputs {
    return new ResultAuctionCall__Inputs(this);
  }

  get outputs(): ResultAuctionCall__Outputs {
    return new ResultAuctionCall__Outputs(this);
  }
}

export class ResultAuctionCall__Inputs {
  _call: ResultAuctionCall;

  constructor(call: ResultAuctionCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ResultAuctionCall__Outputs {
  _call: ResultAuctionCall;

  constructor(call: ResultAuctionCall) {
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

export class SetAuctionEndTimeCall extends ethereum.Call {
  get inputs(): SetAuctionEndTimeCall__Inputs {
    return new SetAuctionEndTimeCall__Inputs(this);
  }

  get outputs(): SetAuctionEndTimeCall__Outputs {
    return new SetAuctionEndTimeCall__Outputs(this);
  }
}

export class SetAuctionEndTimeCall__Inputs {
  _call: SetAuctionEndTimeCall;

  constructor(call: SetAuctionEndTimeCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newEndTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetAuctionEndTimeCall__Outputs {
  _call: SetAuctionEndTimeCall;

  constructor(call: SetAuctionEndTimeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetAuctionStartTimeCall extends ethereum.Call {
  get inputs(): SetAuctionStartTimeCall__Inputs {
    return new SetAuctionStartTimeCall__Inputs(this);
  }

  get outputs(): SetAuctionStartTimeCall__Outputs {
    return new SetAuctionStartTimeCall__Outputs(this);
  }
}

export class SetAuctionStartTimeCall__Inputs {
  _call: SetAuctionStartTimeCall;

  constructor(call: SetAuctionStartTimeCall) {
    this._call = call;
  }

  get _auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newStartTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetAuctionStartTimeCall__Outputs {
  _call: SetAuctionStartTimeCall;

  constructor(call: SetAuctionStartTimeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class StartAuctionCall extends ethereum.Call {
  get inputs(): StartAuctionCall__Inputs {
    return new StartAuctionCall__Inputs(this);
  }

  get outputs(): StartAuctionCall__Outputs {
    return new StartAuctionCall__Outputs(this);
  }
}

export class StartAuctionCall__Inputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get startTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get reservedPrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class StartAuctionCall__Outputs {
  _call: StartAuctionCall;

  constructor(call: StartAuctionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateAccessControlContractCall extends ethereum.Call {
  get inputs(): UpdateAccessControlContractCall__Inputs {
    return new UpdateAccessControlContractCall__Inputs(this);
  }

  get outputs(): UpdateAccessControlContractCall__Outputs {
    return new UpdateAccessControlContractCall__Outputs(this);
  }
}

export class UpdateAccessControlContractCall__Inputs {
  _call: UpdateAccessControlContractCall;

  constructor(call: UpdateAccessControlContractCall) {
    this._call = call;
  }

  get _accessController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateAccessControlContractCall__Outputs {
  _call: UpdateAccessControlContractCall;

  constructor(call: UpdateAccessControlContractCall) {
    this._call = call;
  }
}

export class UpdateNftContractCall extends ethereum.Call {
  get inputs(): UpdateNftContractCall__Inputs {
    return new UpdateNftContractCall__Inputs(this);
  }

  get outputs(): UpdateNftContractCall__Outputs {
    return new UpdateNftContractCall__Outputs(this);
  }
}

export class UpdateNftContractCall__Inputs {
  _call: UpdateNftContractCall;

  constructor(call: UpdateNftContractCall) {
    this._call = call;
  }

  get _nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateNftContractCall__Outputs {
  _call: UpdateNftContractCall;

  constructor(call: UpdateNftContractCall) {
    this._call = call;
  }
}

export class WithdrawAuctionCall extends ethereum.Call {
  get inputs(): WithdrawAuctionCall__Inputs {
    return new WithdrawAuctionCall__Inputs(this);
  }

  get outputs(): WithdrawAuctionCall__Outputs {
    return new WithdrawAuctionCall__Outputs(this);
  }
}

export class WithdrawAuctionCall__Inputs {
  _call: WithdrawAuctionCall;

  constructor(call: WithdrawAuctionCall) {
    this._call = call;
  }
}

export class WithdrawAuctionCall__Outputs {
  _call: WithdrawAuctionCall;

  constructor(call: WithdrawAuctionCall) {
    this._call = call;
  }
}
