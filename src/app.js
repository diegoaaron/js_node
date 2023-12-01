import express from "express";
import { mongoconexion } from "../config/mongo.conexion.js";
import routerUsuarios from "./routes/usuarios.routes.js";

const app = express();

// midleware
app.use(express.json());

// ruta base
app.get("/", (req, res) => {
  res.status(200).send("app up!");
});
app.use(routerUsuarios);

export { app };
