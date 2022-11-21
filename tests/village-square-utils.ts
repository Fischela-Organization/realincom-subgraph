import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  VillageSquareAccessControlContractUpdated,
  AuctionContractUpdated,
  Deposited,
  DisputeReported,
  DisputeResolved,
  VillageSquareOwnershipTransferred,
  Withdrawn
} from "../generated/VillageSquare/VillageSquare"

export function createVillageSquareAccessControlContractUpdatedEvent(
  _accessController: Address,
  sender: Address
): VillageSquareAccessControlContractUpdated {
  let villageSquareAccessControlContractUpdatedEvent = changetype<
    VillageSquareAccessControlContractUpdated
  >(newMockEvent())

  villageSquareAccessControlContractUpdatedEvent.parameters = new Array()

  villageSquareAccessControlContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_accessController",
      ethereum.Value.fromAddress(_accessController)
    )
  )
  villageSquareAccessControlContractUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return villageSquareAccessControlContractUpdatedEvent
}

export function createAuctionContractUpdatedEvent(
  _auctionContract: Address,
  sender: Address
): AuctionContractUpdated {
  let auctionContractUpdatedEvent = changetype<AuctionContractUpdated>(
    newMockEvent()
  )

  auctionContractUpdatedEvent.parameters = new Array()

  auctionContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_auctionContract",
      ethereum.Value.fromAddress(_auctionContract)
    )
  )
  auctionContractUpdatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return auctionContractUpdatedEvent
}

export function createDepositedEvent(
  payee: Address,
  weiAmount: BigInt
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "weiAmount",
      ethereum.Value.fromUnsignedBigInt(weiAmount)
    )
  )

  return depositedEvent
}

export function createDisputeReportedEvent(
  disputeReporter: Address,
  auctionId: BigInt,
  _message: string,
  _email: string,
  _phone: string
): DisputeReported {
  let disputeReportedEvent = changetype<DisputeReported>(newMockEvent())

  disputeReportedEvent.parameters = new Array()

  disputeReportedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeReporter",
      ethereum.Value.fromAddress(disputeReporter)
    )
  )
  disputeReportedEvent.parameters.push(
    new ethereum.EventParam(
      "auctionId",
      ethereum.Value.fromUnsignedBigInt(auctionId)
    )
  )
  disputeReportedEvent.parameters.push(
    new ethereum.EventParam("_message", ethereum.Value.fromString(_message))
  )
  disputeReportedEvent.parameters.push(
    new ethereum.EventParam("_email", ethereum.Value.fromString(_email))
  )
  disputeReportedEvent.parameters.push(
    new ethereum.EventParam("_phone", ethereum.Value.fromString(_phone))
  )

  return disputeReportedEvent
}

export function createDisputeResolvedEvent(
  _fundReceiver: Address,
  payment: BigInt,
  disputeId: BigInt
): DisputeResolved {
  let disputeResolvedEvent = changetype<DisputeResolved>(newMockEvent())

  disputeResolvedEvent.parameters = new Array()

  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "_fundReceiver",
      ethereum.Value.fromAddress(_fundReceiver)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "payment",
      ethereum.Value.fromUnsignedBigInt(payment)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "disputeId",
      ethereum.Value.fromUnsignedBigInt(disputeId)
    )
  )

  return disputeResolvedEvent
}

export function createVillageSquareOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): VillageSquareOwnershipTransferred {
  let villageSquareOwnershipTransferredEvent = changetype<
    VillageSquareOwnershipTransferred
  >(newMockEvent())

  villageSquareOwnershipTransferredEvent.parameters = new Array()

  villageSquareOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  villageSquareOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return villageSquareOwnershipTransferredEvent
}

export function createWithdrawnEvent(
  payee: Address,
  weiAmount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("payee", ethereum.Value.fromAddress(payee))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "weiAmount",
      ethereum.Value.fromUnsignedBigInt(weiAmount)
    )
  )

  return withdrawnEvent
}
