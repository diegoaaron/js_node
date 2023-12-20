import express from "express";

// database
import { urlmongoconexion } from "../config/config.js";
import { openmongoconexion } from "../config/mongo.conexion.js";

openmongoconexion(urlmongoconexion);

// routes
import routerAutor from "./routes/autor.routes.js";
import routerLibro from "./routes/libro.routes.js";
import routerVentaLibro from "./routes/ventalibro.routes.js";

const app = express();

// midleware
app.use(express.json());

// ruta base
app.get("/", (req, res) => {
  res.status(200).send("API up!");
});
app.use(routerAutor);
app.use(routerLibro);
app.use(routerVentaLibro);

export { app };
