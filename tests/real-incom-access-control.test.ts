import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { AddressManagerUpdated } from "../generated/schema"
import { AddressManagerUpdated as AddressManagerUpdatedEvent } from "../generated/RealIncomAccessControl/RealIncomAccessControl"
import { handleAddressManagerUpdated } from "../src/real-incom-access-control"
import { createAddressManagerUpdatedEvent } from "./real-incom-access-control-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let addressManagerAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let innitiator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddressManagerUpdatedEvent = createAddressManagerUpdatedEvent(
      addressManagerAddress,
      innitiator
    )
    handleAddressManagerUpdated(newAddressManagerUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddressManagerUpdated created and stored", () => {
    assert.entityCount("AddressManagerUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddressManagerUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "addressManagerAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AddressManagerUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "innitiator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
