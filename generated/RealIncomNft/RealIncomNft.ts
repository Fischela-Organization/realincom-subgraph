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

export class RealIncomNftAccessControlContractUpdated extends ethereum.Event {
  get params(): RealIncomNftAccessControlContractUpdated__Params {
    return new RealIncomNftAccessControlContractUpdated__Params(this);
  }
}

export class RealIncomNftAccessControlContractUpdated__Params {
  _event: RealIncomNftAccessControlContractUpdated;

  constructor(event: RealIncomNftAccessControlContractUpdated) {
    this._event = event;
  }

  get accessController(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get innitiator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class NftMinted extends ethereum.Event {
  get params(): NftMinted__Params {
    return new NftMinted__Params(this);
  }
}

export class NftMinted__Params {
  _event: NftMinted;

  constructor(event: NftMinted) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get title(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get digiURI(): string {
    return this._event.parameters[3].value.toString();
  }

  get worth(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get productAge(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get revenue(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get expenses(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get traffic(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get location(): string {
    return this._event.parameters[10].value.toString();
  }

  get productLink(): string {
    return this._event.parameters[11].value.toString();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RealIncomNft__seeNftResult {
  value0: string;
  value1: string;
  value2: string;

  constructor(value0: string, value1: string, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }

  getValue0(): string {
    return this.value0;
  }

  getValue1(): string {
    return this.value1;
  }

  getValue2(): string {
    return this.value2;
  }
}

export class RealIncomNft__tokenIdToNftResult {
  value0: Address;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: string;
  value11: string;

  constructor(
    value0: Address,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: string,
    value11: string
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
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromString(this.value10));
    map.set("value11", ethereum.Value.fromString(this.value11));
    return map;
  }

  get_owner(): Address {
    return this.value0;
  }

  get_title(): string {
    return this.value1;
  }

  get_description(): string {
    return this.value2;
  }

  get_digiURI(): string {
    return this.value3;
  }

  get_worth(): BigInt {
    return this.value4;
  }

  get_tokenId(): BigInt {
    return this.value5;
  }

  get_productAge(): BigInt {
    return this.value6;
  }

  get_revenue(): BigInt {
    return this.value7;
  }

  get_expenses(): BigInt {
    return this.value8;
  }

  get_traffic(): BigInt {
    return this.value9;
  }

  getLocation(): string {
    return this.value10;
  }

  get_productLink(): string {
    return this.value11;
  }
}

export class RealIncomNft extends ethereum.SmartContract {
  static bind(address: Address): RealIncomNft {
    return new RealIncomNft("RealIncomNft", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  fetchNftValue(_tokenId: BigInt): BigInt {
    let result = super.call(
      "fetchNftValue",
      "fetchNftValue(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return result[0].toBigInt();
  }

  try_fetchNftValue(_tokenId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "fetchNftValue",
      "fetchNftValue(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  mintNFT(
    _title: string,
    _description: string,
    _digiURI: string,
    productAge: BigInt,
    monthlyRevenue: BigInt,
    monthlyExpenses: BigInt,
    monthlyTraffic: BigInt,
    location: string,
    productLink: string
  ): BigInt {
    let result = super.call(
      "mintNFT",
      "mintNFT(string,string,string,uint256,uint256,uint256,uint256,string,string):(uint256)",
      [
        ethereum.Value.fromString(_title),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_digiURI),
        ethereum.Value.fromUnsignedBigInt(productAge),
        ethereum.Value.fromUnsignedBigInt(monthlyRevenue),
        ethereum.Value.fromUnsignedBigInt(monthlyExpenses),
        ethereum.Value.fromUnsignedBigInt(monthlyTraffic),
        ethereum.Value.fromString(location),
        ethereum.Value.fromString(productLink)
      ]
    );

    return result[0].toBigInt();
  }

  try_mintNFT(
    _title: string,
    _description: string,
    _digiURI: string,
    productAge: BigInt,
    monthlyRevenue: BigInt,
    monthlyExpenses: BigInt,
    monthlyTraffic: BigInt,
    location: string,
    productLink: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mintNFT",
      "mintNFT(string,string,string,uint256,uint256,uint256,uint256,string,string):(uint256)",
      [
        ethereum.Value.fromString(_title),
        ethereum.Value.fromString(_description),
        ethereum.Value.fromString(_digiURI),
        ethereum.Value.fromUnsignedBigInt(productAge),
        ethereum.Value.fromUnsignedBigInt(monthlyRevenue),
        ethereum.Value.fromUnsignedBigInt(monthlyExpenses),
        ethereum.Value.fromUnsignedBigInt(monthlyTraffic),
        ethereum.Value.fromString(location),
        ethereum.Value.fromString(productLink)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  seeNft(_tokenId: BigInt): RealIncomNft__seeNftResult {
    let result = super.call(
      "seeNft",
      "seeNft(uint256):(string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return new RealIncomNft__seeNftResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString()
    );
  }

  try_seeNft(
    _tokenId: BigInt
  ): ethereum.CallResult<RealIncomNft__seeNftResult> {
    let result = super.tryCall(
      "seeNft",
      "seeNft(uint256):(string,string,string)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomNft__seeNftResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenIdToNft(param0: BigInt): RealIncomNft__tokenIdToNftResult {
    let result = super.call(
      "tokenIdToNft",
      "tokenIdToNft(uint256):(address,string,string,string,uint256,uint256,uint256,uint256,uint256,uint256,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new RealIncomNft__tokenIdToNftResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toString(),
      result[11].toString()
    );
  }

  try_tokenIdToNft(
    param0: BigInt
  ): ethereum.CallResult<RealIncomNft__tokenIdToNftResult> {
    let result = super.tryCall(
      "tokenIdToNft",
      "tokenIdToNft(uint256):(address,string,string,string,uint256,uint256,uint256,uint256,uint256,uint256,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RealIncomNft__tokenIdToNftResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toString(),
        value[11].toString()
      )
    );
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  get _accessController(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class MintNFTCall extends ethereum.Call {
  get inputs(): MintNFTCall__Inputs {
    return new MintNFTCall__Inputs(this);
  }

  get outputs(): MintNFTCall__Outputs {
    return new MintNFTCall__Outputs(this);
  }
}

export class MintNFTCall__Inputs {
  _call: MintNFTCall;

  constructor(call: MintNFTCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _digiURI(): string {
    return this._call.inputValues[2].value.toString();
  }

  get productAge(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get monthlyRevenue(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get monthlyExpenses(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get monthlyTraffic(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get location(): string {
    return this._call.inputValues[7].value.toString();
  }

  get productLink(): string {
    return this._call.inputValues[8].value.toString();
  }
}

export class MintNFTCall__Outputs {
  _call: MintNFTCall;

  constructor(call: MintNFTCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SafeTransferCall extends ethereum.Call {
  get inputs(): SafeTransferCall__Inputs {
    return new SafeTransferCall__Inputs(this);
  }

  get outputs(): SafeTransferCall__Outputs {
    return new SafeTransferCall__Outputs(this);
  }
}

export class SafeTransferCall__Inputs {
  _call: SafeTransferCall;

  constructor(call: SafeTransferCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferCall__Outputs {
  _call: SafeTransferCall;

  constructor(call: SafeTransferCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get _baseUri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetNftValueCall extends ethereum.Call {
  get inputs(): SetNftValueCall__Inputs {
    return new SetNftValueCall__Inputs(this);
  }

  get outputs(): SetNftValueCall__Outputs {
    return new SetNftValueCall__Outputs(this);
  }
}

export class SetNftValueCall__Inputs {
  _call: SetNftValueCall;

  constructor(call: SetNftValueCall) {
    this._call = call;
  }

  get nftWorth(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetNftValueCall__Outputs {
  _call: SetNftValueCall;

  constructor(call: SetNftValueCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
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
