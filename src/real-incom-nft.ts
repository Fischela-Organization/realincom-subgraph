import {
  RealIncomNftAccessControlContractUpdated as RealIncomNftAccessControlContractUpdatedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  NftMinted as NftMintedEvent,
  Transfer as TransferEvent,
  RealIncomNft
} from "../generated/RealIncomNft/RealIncomNft"
import { Digi, User } from "../generated/schema"

export function handleRealIncomNftAccessControlContractUpdated(
  event: RealIncomNftAccessControlContractUpdatedEvent
): void {
  
}

export function handleApproval(event: ApprovalEvent): void {
  
}

export function handleNftMinted(event: NftMintedEvent): void {
  let digi = Digi.load(
    event.params.tokenId.toHex()
  )

  if (digi){
    digi.title = event.params.title
    digi.description = event.params.description
    digi.worth = event.params.worth
    digi.location = event.params.location
    digi.productAge = event.params.productAge
    digi.monthlyExpenses = event.params.expenses
    digi.monthlyRevenue = event.params.revenue
    digi.monthlyTraffic = event.params.traffic
    digi.productLink = event.params.productLink
    digi.save()
  }
  
  let user = User.load(event.params.owner.toHexString())
  if (user) {
    user.networth = event.params.worth
    user.save()
  }
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  
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
