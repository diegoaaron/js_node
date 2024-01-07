import express from "express";

// database
import { urlmongoconexion } from "../config/config.js";
import { openmongoconexion } from "../config/mongo.conexion.js";

await openmongoconexion(urlmongoconexion);

// routes
import routerArticulo from "./routes/articulo.routes.js";

const app = express();

// midleware
app.use(express.json());

app.use(routerArticulo);

// ruta base
app.get("/", (req, res) => {
  res.status(200).send(`API up!`);
});

export { app };
