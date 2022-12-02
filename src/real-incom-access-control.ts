import {
  AddressManagerUpdated as AddressManagerUpdatedEvent,
  AdminCreated as AdminCreatedEvent
} from "../generated/RealIncomAccessControl/RealIncomAccessControl"
import { AddressManagerUpdated, AdminCreated } from "../generated/schema"

export function handleAddressManagerUpdated(
  event: AddressManagerUpdatedEvent
): void {
  let entity = new AddressManagerUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.addressManagerAddress = event.params.addressManagerAddress
  entity.innitiator = event.params.innitiator
  entity.save()
}

export function handleAdminCreated(event: AdminCreatedEvent): void {
  let entity = new AdminCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.isAdmin = event.params.isAdmin
  entity.save()
}
