import test from "ava";
import fetch from "node-fetch";

test.skip("post /addventalibro", async (t) => {
  t.plan(3);

  const body = {
    nombreCliente: "rufino torrico",
    libro: ["657fb0deed0eb811c0821db1", "657fb0deed0eb811c0821db3"],
    correo: "rufito@gmail.com",
    fechaVenta: "2023-12-11",
  };

  const response = await fetch("http://localhost:3000/addventalibro", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  t.is(response.status, 200);
  t.is(data.nombreCliente, "rufino torrico");
  t.is(data.correo, "rufito@gmail.com");
});

test.skip("get /readallventalibro", async (t) => {
  t.plan(1);

  const response = await fetch("http://localhost:3000/readallventalibro");

  t.is(response.status, 200);
});

test.skip("get /readuniqueventalibro/:id", async (t) => {
  t.plan(3);

  const response = await fetch(
    "http://localhost:3000/readuniqueventalibro/657fb0e0ed0eb811c0821dbf"
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.is(data.nombreCliente, "Luis vasquez");
  t.is(data.correo, "luis@gmail.com");
});

test.skip("put /putupdateventalibro/:id", async (t) => {
  t.plan(2);

  const body = {
    nombreCliente: "luis alejandro n",
    correo: "lichin@gmail.com",
  };

  const response = await fetch(
    "http://localhost:3000/putupdateventalibro/657fb0e0ed0eb811c0821dc1",
    {
      method: "put",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.is(data.nombreCliente, "luis alejandro n");
});

test.skip("delete /deleteventalibro/:id", async (t) => {
  t.plan(1);

  const response = await fetch(
    "http://localhost:3000/deleteventalibro/657fc22d1fdb646a1dc91470",
    {
      method: "delete",
    }
  );

  t.is(response.status, 200);
});

// https://github.com/avajs/ava/blob/5975b602b771e0dc02382d24b65c5561bd5fc7ee/docs/03-assertions.md

// https://github.com/node-fetch/node-fetch
