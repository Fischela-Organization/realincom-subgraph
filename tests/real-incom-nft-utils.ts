import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  RealIncomNftAccessControlContractUpdated,
  Approval,
  ApprovalForAll,
  NftMinted,
  Transfer
} from "../generated/RealIncomNft/RealIncomNft"

export function createRealIncomNftAccessControlContractUpdatedEvent(
  accessController: Address,
  innitiator: Address
): RealIncomNftAccessControlContractUpdated {
  let realIncomNftAccessControlContractUpdatedEvent = changetype<
    RealIncomNftAccessControlContractUpdated
  >(newMockEvent())

  realIncomNftAccessControlContractUpdatedEvent.parameters = new Array()

  realIncomNftAccessControlContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "accessController",
      ethereum.Value.fromAddress(accessController)
    )
  )
  realIncomNftAccessControlContractUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "innitiator",
      ethereum.Value.fromAddress(innitiator)
    )
  )

  return realIncomNftAccessControlContractUpdatedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createNftMintedEvent(
  owner: Address,
  title: string,
  description: string,
  digiURI: string,
  amount: BigInt,
  tokenId: BigInt
): NftMinted {
  let nftMintedEvent = changetype<NftMinted>(newMockEvent())

  nftMintedEvent.parameters = new Array()

  nftMintedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam("digiURI", ethereum.Value.fromString(digiURI))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromSignedBigInt(amount))
  )
  nftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nftMintedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
