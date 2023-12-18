import express from "express";

// database
import { urlmongoconexion } from "./config.js";
import { openmongoconexion } from "../config/mongo.conexion.js";

openmongoconexion(urlmongoconexion);

// routes
import routerAuthor from "./routes/autor.routes.js";
import routerBook from "./routes/book.routes.js";
import routerBookInstace from "./routes/bookinstance.routes.js";

const app = express();

// midleware
app.use(express.json());

// ruta base
app.get("/", (req, res) => {
  res.status(200).send("API up!");
});
app.use(routerAuthor);
app.use(routerBook);
app.use(routerBookInstace);

export { app };
