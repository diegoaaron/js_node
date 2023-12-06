import express from "express";
import { mongoconexion } from "../config/mongo.conexion.js";

// routes
import routerAuthor from "./routes/author.routes.js";
import routerBook from "./routes/book.routes.js";
import routerBookInstace from "./routes/bookinstance.routes.js";

const app = express();

// midleware
app.use(express.json());

// ruta base
app.get("/", (req, res) => {
  res.status(200).send("app up!");
});
app.use(routerAuthor);
app.use(routerBook);
app.use(routerBookInstace);

export { app };
