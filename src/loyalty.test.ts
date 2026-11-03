import { test, describe } from "vitest";
import { generateRedeemCode, loyaltyHeaders } from "./loyalty";
import { expect } from "vitest";

describe("loyalty Headers", () => {
  test("returns password", () => {
    const result = loyaltyHeaders();

    console.log(result);
    expect(result).toEqual({ Authorization: "Basic bG95YWx0eTphZG1pbjEyMw==" });
  });

  test("generateRedeemCode", () => {
    const result = generateRedeemCode();

    expect(result).toMatch(/^[0-9A-F]{8}$/);
  });
});
