import {
  VillageSquareAccessControlContractUpdated as VillageSquareAccessControlContractUpdatedEvent,
  AuctionContractUpdated as AuctionContractUpdatedEvent,
  Deposited as DepositedEvent,
  DisputeReported as DisputeReportedEvent,
  DisputeResolved as DisputeResolvedEvent,
  VillageSquareOwnershipTransferred as VillageSquareOwnershipTransferredEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/VillageSquare/VillageSquare"
import {
  VillageSquareAccessControlContractUpdated,
  AuctionContractUpdated,
  Deposited,
  DisputeReported,
  DisputeResolved,
  VillageSquareOwnershipTransferred,
  Withdrawn
} from "../generated/schema"

export function handleVillageSquareAccessControlContractUpdated(
  event: VillageSquareAccessControlContractUpdatedEvent
): void {
  let entity = new VillageSquareAccessControlContractUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._accessController = event.params._accessController
  entity.sender = event.params.sender
  entity.save()
}

export function handleAuctionContractUpdated(
  event: AuctionContractUpdatedEvent
): void {
  let entity = new AuctionContractUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._auctionContract = event.params._auctionContract
  entity.sender = event.params.sender
  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new Deposited(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payee = event.params.payee
  entity.weiAmount = event.params.weiAmount
  entity.save()
}

export function handleDisputeReported(event: DisputeReportedEvent): void {
  let entity = new DisputeReported(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.disputeReporter = event.params.disputeReporter
  entity.auctionId = event.params.auctionId
  entity._message = event.params._message
  entity._email = event.params._email
  entity._phone = event.params._phone
  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new DisputeResolved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._fundReceiver = event.params._fundReceiver
  entity.payment = event.params.payment
  entity.disputeId = event.params.disputeId
  entity.save()
}

export function handleVillageSquareOwnershipTransferred(
  event: VillageSquareOwnershipTransferredEvent
): void {
  let entity = new VillageSquareOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payee = event.params.payee
  entity.weiAmount = event.params.weiAmount
  entity.save()
}
