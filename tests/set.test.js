import set from "../src/set.js";
import assert from "power-assert";

test('user name is Madonna', () => {
  const user = {
    name: "Madonna",
    friends: ["Kate", "Michel"],
    email: "madonna@example.com",
  };

  assert(user.name === "Madonna");
});
