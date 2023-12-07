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

test("bar", async (t) => {
  const bar = Promise.resolve("bar");
  t.is(await bar, "bar");
});
