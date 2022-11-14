import { returnFibonacciNumFromInt } from "./fibonacci.ts";

describe("for Fibonnaci", () => {
    test("fibonacci function works", () => {
        expect(returnFibonacciNumFromInt(6)).toBe(8);
    });
});
