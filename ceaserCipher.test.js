const ceaserCipher = require("./ceaserCipher");

test("5 casas", () => {
  expect(ceaserCipher("Bond, James Bond.", 5)).toBe("Gtsi, Ofrjx Gtsi.");
});
