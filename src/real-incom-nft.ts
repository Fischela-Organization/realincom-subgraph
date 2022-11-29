import { BigInt } from "@graphprotocol/graph-ts"
import {
  RealIncomNftAccessControlContractUpdated as RealIncomNftAccessControlContractUpdatedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  NftMinted as NftMintedEvent,
  Transfer as TransferEvent,
  RealIncomNft
} from "../generated/RealIncomNft/RealIncomNft"
import {
  Digi, User
} from "../generated/schema"

export function handleRealIncomNftAccessControlContractUpdated(
  event: RealIncomNftAccessControlContractUpdatedEvent
): void {
  
}

export function handleApproval(event: ApprovalEvent): void {
  
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  
}

export function handleNftMinted(event: NftMintedEvent): void {
  let digi = Digi.load(
    event.params.tokenId.toHex()
  )

  if (digi){
    digi.title = event.params.title
    digi.description = event.params.description
    digi.worth = event.params.amount
    digi.save()
  }
  
  let user = User.load(event.params.owner.toHexString())
  if (user) {
    user.networth = event.params.amount
    user.save()
  }
}

export function handleTransfer(event: TransferEvent): void {

  let digi = Digi.load(event.params.tokenId.toHex())
  if (!digi){
    digi = new Digi(event.params.tokenId.toHex())
    let nftContract = RealIncomNft.bind(event.address)
    let tokenURI = nftContract.tokenURI(event.params.tokenId)
    digi.metadataURI = tokenURI
    digi.created = event.block.timestamp
    digi.ownerAddress = event.params.to.toHexString()
    digi.creator = event.params.to.toHexString()
    digi.save()
  }

  if (digi){
    digi.ownerAddress = event.params.to.toHexString()
    digi.save()
  }

  let user = User.load(event.params.to.toHexString())

  if (!user){
    user = new User(event.params.to.toHexString())
    user.save()
  }

}
