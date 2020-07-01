import { someVar, subtract } from "../build/main.js";

it("works", () => {
    expect(someVar).toBe("someValue");
});
it("test mapping", () => {
    expect(subtract(3, 5)).toEqual(-2);
});
