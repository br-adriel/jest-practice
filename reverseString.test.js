const reverseString = require("./reverseString");

test("Palavra", () => {
  expect(reverseString("Palavra!")).toBe("!arvalaP");
});

test("Frase", () => {
  expect(reverseString("As palavras escritas!")).toBe("!satircse sarvalap sA");
});
