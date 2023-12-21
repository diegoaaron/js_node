import test from "ava";
import fetch from "node-fetch";

test("get /", async (t) => {
  t.plan(2);

  const response = await fetch("http://localhost:3000/");
  const data = await response.text();

  t.is(response.status, 200);
  t.is(data, "API up!");
});

test("post /addautor", async (t) => {
  t.plan(1);

  const body = {
    nombres: "luis alejandro",
    apellidos: "dias marci",
    fechaNacimiento: "1975-08-22",
    fechaMuerte: "2015-11-03",
  };

  const response = await fetch("http://localhost:3000/addautor", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  t.is(response.status, 200);
});

test("get /readallautores", async (t) => {
  t.plan(1);

  const response = await fetch("http://localhost:3000/readallautores");
  const data = await response.json();

  t.is(response.status, 200);
});

test("get /readuniqueautor/:id", async (t) => {
  t.plan(2);

  const response = await fetch(
    "http://localhost:3000/readuniqueautor/657fb0dbed0eb811c0821da4"
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.deepEqual(data, {
    _id: "657fb0dbed0eb811c0821da4",
    nombres: "Isaac",
    apellidos: "Asimov",
    fechaNacimiento: "1920-01-02T00:00:00.000Z",
    fechaMuerte: "1992-04-06T00:00:00.000Z",
    __v: 0,
  });
});

test("put /putupdateautor/:id", async (t) => {
  t.plan(1);

  const body = {
    nombres: "luis alejandro 3",
    apellidos: "dias marci ",
    fechaNacimiento: "1999-08-22",
    fechaMuerte: "2015-11-03",
  };

  const response = await fetch(
    "http://localhost:3000/putupdateautor/657fb0dbed0eb811c0821da4",
    {
      method: "put",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  t.is(response.status, 200);
});

test("delete /deleteautor/:id", async (t) => {
  t.plan(1);

  const response = await fetch(
    "http://localhost:3000/deleteautor/657fb0dbed0eb811c0821da4",
    {
      method: "delete",
    }
  );
  const data = await response.json();

  t.is(response.status, 200);
});

// https://github.com/avajs/ava/blob/5975b602b771e0dc02382d24b65c5561bd5fc7ee/docs/03-assertions.md

// https://github.com/node-fetch/node-fetch
