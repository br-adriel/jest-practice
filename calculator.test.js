const calculator = require("./calculator");

test("soma", () => {
  expect(calculator.add(4, 16)).toBe(20);
});
