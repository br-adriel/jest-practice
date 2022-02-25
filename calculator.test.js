const calculator = require("./calculator");

test("soma", () => {
  expect(calculator.add(4, 16)).toBe(20);
});

test("soma decimal", () => {
  expect(calculator.add(4.2, 15.8)).toBeCloseTo(20);
});
