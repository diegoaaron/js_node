import test from "ava";
import fetch from "node-fetch";

test.skip("get /", async (t) => {
  t.plan(2);

  const response = await fetch("http://localhost:3000/");
  const data = await response.text();

  t.is(response.status, 200);
  t.is(data, "API up!");
});

test.skip("post /addautor", async (t) => {
  t.plan(3);

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
  t.is(data.nombres, "luis alejandro");
  t.is(data.apellidos, "dias marci");
});

test.skip("get /readallautores", async (t) => {
  t.plan(1);

  const response = await fetch("http://localhost:3000/readallautores");

  t.is(response.status, 200);
});

test.skip("get /readuniqueautor/:id", async (t) => {
  t.plan(3);

  const response = await fetch(
    "http://localhost:3000/readuniqueautor/657fbf836265e0033c0feaa5"
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.is(data.nombres, "luis alejandro 3");
  t.is(data.apellidos, "dias marci 3");
});

test.skip("put /putupdateautor/:id", async (t) => {
  t.plan(2);

  const body = {
    nombres: "luis alejandro 5",
    apellidos: "dias marci 5",
    fechaNacimiento: "1999-08-22",
    fechaMuerte: "2015-11-03",
  };

  const response = await fetch(
    "http://localhost:3000/putupdateautor/657fbf836265e0033c0feaa5",
    {
      method: "put",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.is(data.nombres, "luis alejandro 3");
});

test.skip("delete /deleteautor/:id", async (t) => {
  t.plan(1);

  const response = await fetch(
    "http://localhost:3000/deleteautor/657fbf836265e0033c0feaa4",
    {
      method: "delete",
    }
  );

  t.is(response.status, 200);
});

// https://github.com/avajs/ava/blob/5975b602b771e0dc02382d24b65c5561bd5fc7ee/docs/03-assertions.md

// https://github.com/node-fetch/node-fetch
