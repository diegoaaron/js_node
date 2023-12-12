const express = require("express");

const app = express();

// respondiendo un mensaje

app.get("/", (req, res) => {
  res.send("hola mundo");
});

// respondiendo un archivo
app.get("/miarchivo", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

// respondiendo un json

app.get("/user", (req, res) => {
  res.json({
    name: "fazt",
    lastname: "ray",
    age: 40,
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "some street 123",
    },
  });
});

// manipulando el codigo de respuesta

app.get("/isalive", (req, res) => {
    res.sendStatus(204);
  });
  

app.listen(3000);
console.log(`server en puerto ${3000}`);
