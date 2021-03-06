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

test("Frase ja capitalizada", () => {
  expect(capitalize("As palavra")).toBe("As palavra");
});

test("Frase com maiusculas e minusculas", () => {
  expect(capitalize("aS pAlAVraS")).toBe("AS pAlAVraS");
});

test("Simbolo no inicio", () => {
  expect(capitalize("!as palavras")).toBe("!as palavras");
});
