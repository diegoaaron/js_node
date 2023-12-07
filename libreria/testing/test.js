describe("test ruta get /", () => {
  it("Deberia salir algo", async () => {
    const response = await fetch("http://localhost:3000/");
    let body = await response.body;
    console.log(body);
    expect(response.status).toBe(200);
    // expect(response.body).toBe("app up!");
  });
});
