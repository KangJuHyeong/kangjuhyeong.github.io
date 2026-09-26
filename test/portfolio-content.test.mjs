import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const portfolio = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("shows GitHub profile contact without portfolio wording", () => {
  assert.match(portfolio, /<h3>GitHub 프로필<\/h3>/);
  assert.doesNotMatch(portfolio, /GitHub · 포트폴리오/);
});

test("lists each requested qualification separately", () => {
  assert.match(portfolio, /<h3>SQLD<\/h3>/);
  assert.match(portfolio, /<h3>ADsP<\/h3>/);
  assert.match(portfolio, /<h3>정보처리기사<\/h3>/);
  assert.match(portfolio, /2026\.09/);
});

test("does not name Campuslink Harness in the workflow", () => {
  assert.match(portfolio, /<dt>Workflow<\/dt><dd>Git · GitHub · Codex<\/dd>/);
  assert.doesNotMatch(portfolio, /Campuslink Harness/);
});
