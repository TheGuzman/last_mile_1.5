import { returnFibonacciNumFromInt } from "./fibonacci.ts";

test("fibonacci function works", () => {
  expect(returnFibonacciNumFromInt(6)).toBe(8);
});
