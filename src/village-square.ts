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

  Dispute,
  User
} from "../generated/schema"

export function handleVillageSquareAccessControlContractUpdated(
  event: VillageSquareAccessControlContractUpdatedEvent
): void {
  
}

export function handleAuctionContractUpdated(
  event: AuctionContractUpdatedEvent
): void {

}

export function handleDeposited(event: DepositedEvent): void {
 
}

export function handleDisputeReported(event: DisputeReportedEvent): void {
  let dispute = new Dispute(
    event.address.toHex() + "-" + event.params.auctionId.toString()
  )
  dispute.disputeReporter = event.params.disputeReporter.toHexString()
  dispute.auctionId = event.params.auctionId.toHex()
  dispute.message = event.params._message
  dispute.email = event.params._email
  dispute.phone = event.params._phone
  dispute.save()

  let user = User.load(event.params.disputeReporter.toHexString())
  if(!user){
    user = new User(event.params.disputeReporter.toHexString())
    user.save()
  }
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let dispute = Dispute.load(
    event.address.toHex() + "-" + event.params.disputeId.toString()
  )
  if(dispute){
    dispute.fundReceiver = event.params._fundReceiver.toHexString()
    dispute.payment = event.params.payment.toU64()
    dispute.disputeId = event.params.disputeId.toHex()
    dispute.save()
  }
  
}

export function handleVillageSquareOwnershipTransferred(
  event: VillageSquareOwnershipTransferredEvent
): void {
  
}

export function handleWithdrawn(event: WithdrawnEvent): void {

}
