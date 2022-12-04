import {
  AccessControlContractUpdated as AccessControlContractUpdatedEvent,
  AuctionBalanceWithdrawn as AuctionBalanceWithdrawnEvent,
  AuctionCancelled as AuctionCancelledEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionEndTimeModified as AuctionEndTimeModifiedEvent,
  AuctionResulted as AuctionResultedEvent,
  AuctionStartTimeModified as AuctionStartTimeModifiedEvent,
  BidPlaced as BidPlacedEvent,
  NFTContractUpdated as NFTContractUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ResultsConfirmed as ResultsConfirmedEvent,
  ValueReceived as ValueReceivedEvent,
  ValueSent as ValueSentEvent
} from "../generated/RealIncomAuction/RealIncomAuction"
import {Digi, DigiSale, Dispute, User} from "../generated/schema"


export function handleAccessControlContractUpdated(
  event: AccessControlContractUpdatedEvent
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

export function handleAuctionCancelled(event: AuctionCancelledEvent): void {
  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.auctionId.toHex())
  if(modifyDigisale){
    modifyDigisale.isOnSale = false
    modifyDigisale.save()
  }

  const digi = Digi.load(event.params.tokenId.toHex())
  if(digi){
    digi.isOnSale = false
    digi.save()
  }
}

export function handleAuctionBalanceWithdrawn(
  event: AuctionBalanceWithdrawnEvent
): void {

}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  const digiSale = new DigiSale(event.address.toHex() + "-" + event.params.auctionId.toHex())
  digiSale.amount = event.params.reservedPrice
  digiSale.buyer = null
  digiSale.auctionId = event.params.auctionId.toString()
  digiSale.isOnSale = true
  digiSale.endTime = event.params.endTime
  digiSale.duration = event.block.timestamp
  digiSale.auctionResulted = event.params.resulted
  digiSale.intergrityConfirmed = event.params.intergrityConfirmed
  digiSale.startTime = event.params.startTime
  digiSale.seller = event.transaction.from.toHexString()
  digiSale.digi = event.params.tokenId.toHex()
  digiSale.save()

  const digi = Digi.load(event.params.tokenId.toHex())
  if(digi){
    digi.isOnSale = true
    digi.save()
  }

  let user = User.load(event.transaction.from.toHex())
  if(!user){
    user = new User(event.transaction.from.toHexString())
    user.save()
  }
}


export function handleAuctionEndTimeModified(
  event: AuctionEndTimeModifiedEvent
): void {

  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.auctionId.toHex())
  if(modifyDigisale){
    modifyDigisale.endTime = event.params.endTime
    modifyDigisale.save()
  }
}


export function handleAuctionResulted(event: AuctionResultedEvent): void {
  const digiSale = new DigiSale(event.address.toHex() + "-" + event.params.winner.toHex())
  digiSale.buyer = event.params.winner.toHexString()
  digiSale.isOnSale = false
  digiSale.auctionResulted = true
  digiSale.save()

}

export function handleAuctionStartTimeModified(
  event: AuctionStartTimeModifiedEvent
): void {
  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.auctionId.toHex())
  if(modifyDigisale){
    modifyDigisale.startTime = event.params.startTime
    modifyDigisale.save()
  }
}


export function handleBidPlaced(event: BidPlacedEvent): void {
  const modifyDigisale = DigiSale.load(event.address.toHex() + "-" + event.params.auctionId.toHex())
  if(modifyDigisale){
    const modifyDigi = Digi.load(modifyDigisale.digi)
    if (modifyDigi){
      modifyDigi.worth = event.params.BidAmount
    }
    modifyDigisale.amount = event.params.BidAmount
    modifyDigisale.save()
  }
  
}

export function handleNFTContractUpdated(event: NFTContractUpdatedEvent): void {

 
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {

 
}

export function handleResultsConfirmed(event: ResultsConfirmedEvent): void {
 
}

export function handleValueReceived(event: ValueReceivedEvent): void {
 
}

export function handleValueSent(event: ValueSentEvent): void {
 
}
