const { factorial } = require("../utils/factorial.cjs")

describe("Factorial", () => {
    test("factorial of 5 should 120", () => {
        const result = factorial(5);

        expect(result).toBe(120);
    })
})
