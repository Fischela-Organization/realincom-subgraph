import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { VillageSquareAccessControlContractUpdated } from "../generated/schema"
import { VillageSquareAccessControlContractUpdated as VillageSquareAccessControlContractUpdatedEvent } from "../generated/VillageSquare/VillageSquare"
import { handleVillageSquareAccessControlContractUpdated } from "../src/village-square"
import { createVillageSquareAccessControlContractUpdatedEvent } from "./village-square-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _accessController = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newVillageSquareAccessControlContractUpdatedEvent = createVillageSquareAccessControlContractUpdatedEvent(
      _accessController,
      sender
    )
    handleVillageSquareAccessControlContractUpdated(
      newVillageSquareAccessControlContractUpdatedEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("VillageSquareAccessControlContractUpdated created and stored", () => {
    assert.entityCount("VillageSquareAccessControlContractUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "VillageSquareAccessControlContractUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_accessController",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "VillageSquareAccessControlContractUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
