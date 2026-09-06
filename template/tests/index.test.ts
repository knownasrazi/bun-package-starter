import { describe, expect, test } from "bun:test";
import { shout, sum } from "../src";

describe("sum", () => {
  test("adds numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum()).toBe(0);
  });
});

describe("shout", () => {
  test("uppercases and exclaims", () => {
    expect(shout("hey")).toBe("HEY!");
  });
});
