import { BigInt } from "@graphprotocol/graph-ts"
import {
  RealIncomAuction,
  AccessControlContractUpdated,
  AuctionBalanceWithdrawn,
  AuctionCancelled,
  AuctionCreated,
  AuctionEndTimeModified,
  AuctionResulted,
  AuctionStartTimeModified,
  BidPlaced,
  NFTContractUpdated,
  OwnershipTransferred,
  ValueSent
} from "../generated/RealIncomAuction/RealIncomAuction"
import { Digi, DigiSales, ExampleEntity } from "../generated/schema"


export function handleAccessControlContractUpdated(
  event: AccessControlContractUpdated
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._accessController = event.params._accessController
  entity.sender = event.params.sender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.auctions(...)
  // - contract.fetchAuction(...)
  // - contract.fetchBid(...)
  // - contract.highestBids(...)
  // - contract.owner(...)
  // - contract.setAuctionEndTime(...)
  // - contract.setAuctionStartTime(...)
  // - contract.startAuction(...)
}

export function handleAuctionBalanceWithdrawn(
  event: AuctionBalanceWithdrawn
): void {


}

export function handleAuctionCancelled(event: AuctionCancelled): void {}

export function handleAuctionCreated(event: AuctionCreated): void {
  const digi = new DigiSales(event.address + "-" + event.params.tokenId.toHex())
  digi.amount = event.params.reservedPrice
  digi.buyer = null
  digi.endTime = event.params.endTime
  digi.startTime = event.params.startTime
  digi.seller = event.transaction.from.toHexString()
  digi.digi = event.params.tokenId.toHex()
  digi.save()
}

export function handleAuctionEndTimeModified(
  event: AuctionEndTimeModified
): void {}

export function handleAuctionResulted(event: AuctionResulted): void {}

export function handleAuctionStartTimeModified(
  event: AuctionStartTimeModified
): void {}

export function handleBidPlaced(event: BidPlaced): void {}

export function handleNFTContractUpdated(event: NFTContractUpdated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleValueSent(event: ValueSent): void {}
