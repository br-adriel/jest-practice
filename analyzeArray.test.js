const analyzeArray = require("./analyzeArray");

const arr = [6, 10, 2, 8, 4];

test("Media", () => {
  expect(analyzeArray(arr).average).toBe(6);
});

test("Minimo", () => {
  expect(analyzeArray(arr).min).toBe(2);
});

test("Maximo", () => {
  expect(analyzeArray(arr).max).toBe(10);
});
