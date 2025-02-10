import capitalize from "../src/capitalize.js";
import assert from "power-assert";

test("capitalize correctly capitalizes strings", () => {
  assert.equal(capitalize(""), "");
  assert.equal(capitalize("hello"), "Hello");
});
