import {
  RealIncomNftAccessControlContractUpdated as RealIncomNftAccessControlContractUpdatedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  NftMinted as NftMintedEvent,
  Transfer as TransferEvent
} from "../generated/RealIncomNft/RealIncomNft"
import {
  RealIncomNftAccessControlContractUpdated,
  Approval,
  ApprovalForAll,
  NftMinted,
  Transfer
} from "../generated/schema"

export function handleRealIncomNftAccessControlContractUpdated(
  event: RealIncomNftAccessControlContractUpdatedEvent
): void {
  let entity = new RealIncomNftAccessControlContractUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.accessController = event.params.accessController
  entity.innitiator = event.params.innitiator
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleNftMinted(event: NftMintedEvent): void {
  let entity = new NftMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.title = event.params.title
  entity.description = event.params.description
  entity.digiURI = event.params.digiURI
  entity.amount = event.params.amount
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
