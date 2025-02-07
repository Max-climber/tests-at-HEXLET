import { strict as assert } from "node:assert";
import set from "../src/set.js";

const obj = {};

assert.deepStrictEqual(set(obj, "key1", "value1"), { key1: "value1" });
assert.deepStrictEqual(set(obj, "key1", "next value"), { key1: "value1" });

console.log("Все тесты пройдены!");
