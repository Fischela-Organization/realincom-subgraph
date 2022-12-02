import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AddressManagerUpdated,
  AdminCreated
} from "../generated/RealIncomAccessControl/RealIncomAccessControl"

export function createAddressManagerUpdatedEvent(
  addressManagerAddress: Address,
  innitiator: Address
): AddressManagerUpdated {
  let addressManagerUpdatedEvent = changetype<AddressManagerUpdated>(
    newMockEvent()
  )

  addressManagerUpdatedEvent.parameters = new Array()

  addressManagerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "addressManagerAddress",
      ethereum.Value.fromAddress(addressManagerAddress)
    )
  )
  addressManagerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "innitiator",
      ethereum.Value.fromAddress(innitiator)
    )
  )

  return addressManagerUpdatedEvent
}

export function createAdminCreatedEvent(
  admin: Address,
  isAdmin: boolean
): AdminCreated {
  let adminCreatedEvent = changetype<AdminCreated>(newMockEvent())

  adminCreatedEvent.parameters = new Array()

  adminCreatedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  adminCreatedEvent.parameters.push(
    new ethereum.EventParam("isAdmin", ethereum.Value.fromBoolean(isAdmin))
  )

  return adminCreatedEvent
}
