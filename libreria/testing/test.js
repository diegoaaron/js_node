// import { fetch } from "../node_modules/node-fetch/src/";

describe("test ruta get /", () => {
  it("Deberia salir algo", async () => {
    const response = await fetch("https://api.github.com/users/github");
    expect(response.status).toBe(200);
    expect(response.body).toBe("app up!");
  });
});

// test("add 1", () => {
//   expect(1).toBe(1);
// });

// test("add 2", async () => {
//   let test = await fetch("https://www.google.com.pe");
//   expect(test).toBe("x");
// });
