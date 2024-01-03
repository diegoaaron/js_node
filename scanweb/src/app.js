import express from "express";

// database
import { urlmongoconexion } from "../config/config.js";
import { openmongoconexion } from "../config/mongo.conexion.js";

await openmongoconexion(urlmongoconexion);

// routes
import routerScan from "./routes/scan.routes.js";

const app = express();

// midleware
app.use(express.json());

app.use(routerScan);

// ruta base
app.get("/", (req, res) => {
  res.status(200).send(`Api up!`);
});

export { app };
