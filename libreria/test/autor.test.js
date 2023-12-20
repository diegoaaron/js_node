import test from "ava";

import fetch from "node-fetch";

// jest.describe("test ruta get /", () => {
//   jest.it("Deberia salir algo", async () => {
//     const response = await fetch("http://localhost:3000/");
//     // console.log(body);
//     jest.expect(response.status).jest.toBe(200);
//     // expect(response.body.text()).toBe("app up!");
//   });
// });
test("foo", (t) => {
  t.pass();
});

test("get /", async (t) => {
  const response = await fetch("http://localhost:3000/");
  t.is(response.status, 200);
  // t.is(response.body.text(), "app up!");
});

test.after("cleanup", (t) => {
  // This runs after all tests
  console.log("hi!");
});

// https://github.com/avajs/ava/blob/5975b602b771e0dc02382d24b65c5561bd5fc7ee/docs/03-assertions.md