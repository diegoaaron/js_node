import express from "express";
import { dirbasesrc } from "../config/config.js";
import { join } from "path";
// database
import { urlmongoconexion } from "../config/config.js";
import { openmongoconexion } from "../config/mongo.conexion.js";

openmongoconexion(urlmongoconexion);
let rutex = join(dirbasesrc, "/routes/*.js");
console.log(rutex);

// documentacion
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentacion API Libreria",
      version: "1.1.1",
      description: "API sobre solicitud de libros",
    },
  },
  apis: [rutex],
};

const openapiSpecification = swaggerJsdoc(options);

// routes
import routerAutor from "./routes/autor.routes.js";
import routerLibro from "./routes/libro.routes.js";
import routerVentaLibro from "./routes/ventalibro.routes.js";

const app = express();

// midleware
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification)); // documentacion

app.use(routerAutor);
app.use(routerLibro);
app.use(routerVentaLibro);

// ruta base
app.get("/", (req, res) => {
  res.status(200).send("API up!");
});

export { app };
