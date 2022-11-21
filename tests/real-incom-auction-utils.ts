import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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

export function createAccessControlContractUpdatedEvent(
  _accessController: Address,
  sender: Address
): AccessControlContractUpdated {
  let accessControlContractUpdatedEvent = changetype<
    AccessControlContractUpdated
  >(newMockEvent())

  accessControlContractUpdatedEvent.parameters = new Array()

  accessControlContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_accessController",
      ethereum.Value.fromAddress(_accessController)
    )
  )
  accessControlContractUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return accessControlContractUpdatedEvent
}

export function createAuctionBalanceWithdrawnEvent(
  to: Address,
  from: Address,
  amount: BigInt
): AuctionBalanceWithdrawn {
  let auctionBalanceWithdrawnEvent = changetype<AuctionBalanceWithdrawn>(
    newMockEvent()
  )

  auctionBalanceWithdrawnEvent.parameters = new Array()

  auctionBalanceWithdrawnEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  auctionBalanceWithdrawnEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  auctionBalanceWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return auctionBalanceWithdrawnEvent
}

export function createAuctionCancelledEvent(
  auctionId: BigInt,
  tokenId: BigInt,
  seller: Address
): AuctionCancelled {
  let auctionCancelledEvent = changetype<AuctionCancelled>(newMockEvent())

  auctionCancelledEvent.parameters = new Array()

  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return auctionCancelledEvent
}

export function createAuctionCreatedEvent(
  tokenId: BigInt,
  startTime: BigInt,
  reservedPrice: BigInt,
  endTime: BigInt,
  seller: Address
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "reservedPrice",
      ethereum.Value.fromUnsignedBigInt(reservedPrice)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )

  return auctionCreatedEvent
}

export function createAuctionEndTimeModifiedEvent(
  auctionId: BigInt,
  tokenId: BigInt,
  seller: Address,
  endTime: BigInt
): AuctionEndTimeModified {
  let auctionEndTimeModifiedEvent = changetype<AuctionEndTimeModified>(
    newMockEvent()
  )

  auctionEndTimeModifiedEvent.parameters = new Array()

  auctionEndTimeModifiedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionEndTimeModifiedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionEndTimeModifiedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionEndTimeModifiedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return auctionEndTimeModifiedEvent
}

export function createAuctionResultedEvent(
  seller: Address,
  winner: Address,
  winningBid: BigInt,
  endTime: BigInt
): AuctionResulted {
  let auctionResultedEvent = changetype<AuctionResulted>(newMockEvent())

  auctionResultedEvent.parameters = new Array()

  auctionResultedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam(
      "winningBid",
      ethereum.Value.fromUnsignedBigInt(winningBid)
    )
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return auctionResultedEvent
}

export function createAuctionStartTimeModifiedEvent(
  auctionId: BigInt,
  tokenId: BigInt,
  seller: Address,
  startTime: BigInt
): AuctionStartTimeModified {
  let auctionStartTimeModifiedEvent = changetype<AuctionStartTimeModified>(
    newMockEvent()
  )

  auctionStartTimeModifiedEvent.parameters = new Array()

  auctionStartTimeModifiedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionStartTimeModifiedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionStartTimeModifiedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionStartTimeModifiedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )

  return auctionStartTimeModifiedEvent
}

export function createBidPlacedEvent(
  BidAmount: BigInt,
  Bidder: Address,
  bidTime: BigInt
): BidPlaced {
  let bidPlacedEvent = changetype<BidPlaced>(newMockEvent())

  bidPlacedEvent.parameters = new Array()

  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "BidAmount",
      ethereum.Value.fromUnsignedBigInt(BidAmount)
    )
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("Bidder", ethereum.Value.fromAddress(Bidder))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bidTime",
      ethereum.Value.fromUnsignedBigInt(bidTime)
    )
  )

  return bidPlacedEvent
}

export function createNFTContractUpdatedEvent(
  _nftContract: Address,
  sender: Address
): NFTContractUpdated {
  let nftContractUpdatedEvent = changetype<NFTContractUpdated>(newMockEvent())

  nftContractUpdatedEvent.parameters = new Array()

  nftContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_nftContract",
      ethereum.Value.fromAddress(_nftContract)
    )
  )
  nftContractUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return nftContractUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createValueSentEvent(to: Address, val: BigInt): ValueSent {
  let valueSentEvent = changetype<ValueSent>(newMockEvent())

  valueSentEvent.parameters = new Array()

  valueSentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  valueSentEvent.parameters.push(
    new ethereum.EventParam("val", ethereum.Value.fromUnsignedBigInt(val))
  )

  return valueSentEvent
}
