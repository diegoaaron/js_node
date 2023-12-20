import test from "ava";
import fetch from "node-fetch";

test("cleanup", (t) => {
  t.pass("saltando un test");
});

test("foo", (t) => {
  t.pass("saltando un test");
});

test("get localhost:3000/", async (t) => {
  const response = await fetch("http://localhost:3000/");
  t.is(response.status, 200, "!completado");
});

// https://github.com/avajs/ava/blob/5975b602b771e0dc02382d24b65c5561bd5fc7ee/docs/03-assertions.md
