import test from "ava";
import fetch from "node-fetch";

test.skip("post /addlibro", async (t) => {
  t.plan(3);

  const body = {
    autor: ["657fb0dbed0eb811c0821da2", "657fb0dbed0eb811c0821da3"],
    titulo: "historia deñ luis",
    resumen: "historia de un viaje por la arena",
    isbn: "1-22200-909-3",
    serie: "9781473211896",
    genero: ["suspenso", "terror"],
    estado: "disponible",
  };

  const response = await fetch("http://localhost:3000/addlibro", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  t.is(response.status, 200);
  t.is(data.titulo, "historia deñ luis");
  t.is(data.resumen, "historia de un viaje por la arena");
});

test.skip("get /readalllibros", async (t) => {
  t.plan(1);

  const response = await fetch("http://localhost:3000/readalllibros");

  t.is(response.status, 200);
});

test.skip("get /readuniquelibro/:id", async (t) => {
  t.plan(3);

  const response = await fetch(
    "http://localhost:3000/readuniquelibro/657fb0deed0eb811c0821db1"
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.is(data.titulo, "The Name of the Wind (The Kingkiller Chronicle, #1)");
  t.is(data.isbn, "9781473211896");
});

test.skip("put /putupdatelibro/:id", async (t) => {
  t.plan(2);

  const body = {
    titulo: "historia de luis",
    resumen: "historia de un viaje por la arena 2",
  };

  const response = await fetch(
    "http://localhost:3000/putupdatelibro/657fb0deed0eb811c0821db3",
    {
      method: "put",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();

  t.is(response.status, 200);
  t.is(data.resumen, "historia de un viaje por la arena 2");
});

test.skip("delete /deletelibro/:id", async (t) => {
  t.plan(1);

  const response = await fetch(
    "http://localhost:3000/deletelibro/657fb0deed0eb811c0821db4",
    {
      method: "delete",
    }
  );

  t.is(response.status, 200);
});
