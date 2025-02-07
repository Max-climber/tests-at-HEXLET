import reverse from "../src/index.js";

test("reverse52", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});
