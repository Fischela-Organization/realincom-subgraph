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
import { Digi, DigiSale, User } from "../generated/schema"


export function handleAccessControlContractUpdated(
  event: AccessControlContractUpdated
): void {
  

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address.toHex())
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

export function handleAuctionCancelled(event: AuctionCancelled): void {
  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.tokenId.toHex())
  if(modifyDigisale){
    modifyDigisale.isOnSale = false
    modifyDigisale.save()
  }
}

export function handleAuctionCreated(event: AuctionCreated): void {
  const digiSale = new DigiSale(event.address.toHex() + "-" + event.params.tokenId.toHex())
  digiSale.amount = event.params.reservedPrice
  digiSale.buyer = null
  digiSale.isOnSale = true
  digiSale.endTime = event.params.endTime
  digiSale.startTime = event.params.startTime
  digiSale.seller = event.transaction.from.toHexString()
  digiSale.digi = event.params.tokenId.toHex()
  digiSale.save()

  let user = User.load(event.transaction.from.toHex())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
}

export function handleAuctionEndTimeModified(
  event: AuctionEndTimeModified
): void {

  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.tokenId.toHex())
  if(modifyDigisale){
    modifyDigisale.endTime = event.params.endTime
    modifyDigisale.save()
  }
}

export function handleAuctionResulted(event: AuctionResulted): void {
  const digiSale = new DigiSale(event.address.toHex() + "-" + event.params.winner.toHex())
  digiSale.buyer = event.params.winner.toHexString()
  digiSale.isOnSale = false
  digiSale.save()
}

export function handleAuctionStartTimeModified(
  event: AuctionStartTimeModified
): void {
  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.tokenId.toHex())
  if(modifyDigisale){
    modifyDigisale.startTime = event.params.startTime
    modifyDigisale.save()
  }
}

export function handleBidPlaced(event: BidPlaced): void {
  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.Bidder.toHex())
  if(modifyDigisale){
    const modifyDigi = Digi.load(modifyDigisale.digi)
    if (modifyDigi){
      modifyDigi.worth = event.params.BidAmount
    }
    modifyDigisale.amount = event.params.BidAmount
    modifyDigisale.save()
  }

  
}

export function handleNFTContractUpdated(event: NFTContractUpdated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleValueSent(event: ValueSent): void {}
