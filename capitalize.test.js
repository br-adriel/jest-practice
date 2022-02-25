const capitalize = require("./capitalize");

test("Palavra", () => {
  expect(capitalize("palavra")).toBe("Palavra");
});
