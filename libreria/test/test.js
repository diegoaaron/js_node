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
  t.is(response.body.text(), "app up!");
});
