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
  ResultsConfirmed,
  ValueReceived,
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
  auctionId: BigInt,
  tokenId: BigInt,
  startTime: BigInt,
  reservedPrice: BigInt,
  intergrityConfirmed: boolean,
  resulted: boolean,
  endTime: BigInt,
  seller: Address,
  isOnSale: boolean,
  sellType: string
): AuctionCreated {
  let auctionCreatedEvent = changetype<AuctionCreated>(newMockEvent())

  auctionCreatedEvent.parameters = new Array()

  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
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
      "intergrityConfirmed",
      ethereum.Value.fromBoolean(intergrityConfirmed)
    )
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("resulted", ethereum.Value.fromBoolean(resulted))
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
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("isOnSale", ethereum.Value.fromBoolean(isOnSale))
  )
  auctionCreatedEvent.parameters.push(
    new ethereum.EventParam("sellType", ethereum.Value.fromString(sellType))
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
  buyer: Address,
  winner: Address,
  winningBid: BigInt,
  endTime: BigInt,
  auctionId: BigInt,
  tokenId: BigInt
): AuctionResulted {
  let auctionResultedEvent = changetype<AuctionResulted>(newMockEvent())

  auctionResultedEvent.parameters = new Array()

  auctionResultedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
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
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  auctionResultedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
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
  bidTime: BigInt,
  auctionId: BigInt,
  tokenId: BigInt
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
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
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

export function createResultsConfirmedEvent(
  seller: Address,
  buyer: Address,
  isOnsale: boolean,
  intergrityConfirmed: boolean,
  tokenId: BigInt
): ResultsConfirmed {
  let resultsConfirmedEvent = changetype<ResultsConfirmed>(newMockEvent())

  resultsConfirmedEvent.parameters = new Array()

  resultsConfirmedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  resultsConfirmedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  resultsConfirmedEvent.parameters.push(
    new ethereum.EventParam("isOnsale", ethereum.Value.fromBoolean(isOnsale))
  )
  resultsConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "intergrityConfirmed",
      ethereum.Value.fromBoolean(intergrityConfirmed)
    )
  )
  resultsConfirmedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return resultsConfirmedEvent
}

export function createValueReceivedEvent(
  sender: Address,
  value: BigInt
): ValueReceived {
  let valueReceivedEvent = changetype<ValueReceived>(newMockEvent())

  valueReceivedEvent.parameters = new Array()

  valueReceivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  valueReceivedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return valueReceivedEvent
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
