// Такой необычный импорт связан с тем,
// что assert, экспортируемый по умолчанию, считается устаревшим
// Правильно использовать strict
import { strict as assert } from "node:assert";
import capitalize from "../src/capitalize.js";

// Проверка сменилась с отрицательной на положительную
assert.equal(capitalize(""), "");
assert.equal(capitalize("hello"), "Hello");
