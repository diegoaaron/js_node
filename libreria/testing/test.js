import { jest } from "@jest/globals";
import fetch from "node-fetch";

jest.describe("test ruta get /", () => {
  jest.it("Deberia salir algo", async () => {
    const response = await fetch("http://localhost:3000/");
    // console.log(body);
    jest.expect(response.status).jest.toBe(200);
    // expect(response.body.text()).toBe("app up!");
  });
});
