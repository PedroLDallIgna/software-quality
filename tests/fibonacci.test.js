const { fibonacci } = require("../utils/fibonacci.cjs");

describe("Fibonacci", () => {
    test("fibonacci at pos 6 should be 8", () => {
        const result = fibonacci(6);

        expect(result).toBe(8);
    })
})
