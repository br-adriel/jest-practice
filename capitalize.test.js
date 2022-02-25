const capitalize = require("./capitalize");

test("Palavra", () => {
  expect(capitalize("palavra")).toBe("Palavra");
});

test("Palavra ja capitalizada", () => {
  expect(capitalize("Palavra")).toBe("Palavra");
});

test("Frase", () => {
  expect(capitalize("as palavras")).toBe("As palavras");
});
