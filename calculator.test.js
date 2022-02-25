const calculator = require("./calculator");

test("soma", () => {
  expect(calculator.add(4, 16)).toBe(20);
});

test("soma decimal", () => {
  expect(calculator.add(4.2, 15.8)).toBeCloseTo(20);
});

test("subtracao", () => {
  expect(calculator.subtract(8, 2)).toBe(6);
});

test("subtracao decimal", () => {
  expect(calculator.subtract(8.5, 2)).toBeCloseTo(6.5);
});

test("multiplicacao", () => {
  expect(calculator.multiply(8, 2)).toBe(16);
});

test("multiplicacao decimal", () => {
  expect(calculator.multiply(10, 1.5)).toBeCloseTo(15);
});

test("divisao", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
