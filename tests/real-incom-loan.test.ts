import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { LoanCreated } from "../generated/schema"
import { LoanCreated as LoanCreatedEvent } from "../generated/RealIncomLoan/RealIncomLoan"
import { handleLoanCreated } from "../src/real-incom-loan"
import { createLoanCreatedEvent } from "./real-incom-loan-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let amountSupplied = BigInt.fromI32(234)
    let interestRate = BigInt.fromI32(234)
    let loanDuration = BigInt.fromI32(234)
    let toBePaidMonthly = BigInt.fromI32(234)
    let roi = BigInt.fromI32(234)
    let lender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let isActive = "boolean Not implemented"
    let loanId = BigInt.fromI32(234)
    let newLoanCreatedEvent = createLoanCreatedEvent(
      amountSupplied,
      interestRate,
      loanDuration,
      toBePaidMonthly,
      roi,
      lender,
      isActive,
      loanId
    )
    handleLoanCreated(newLoanCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LoanCreated created and stored", () => {
    assert.entityCount("LoanCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountSupplied",
      "234"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestRate",
      "234"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loanDuration",
      "234"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "toBePaidMonthly",
      "234"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "roi",
      "234"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isActive",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "LoanCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "loanId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
