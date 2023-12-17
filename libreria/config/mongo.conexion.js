import mongoose from "mongoose";
import { urlmongoconexion } from "./config.js";

async function mongoconexion(url) {
  try {
    await mongoose.connect(url);
    console.log("conexion establecida!");
  } catch (error) {
    console.log(error);
  }
}

mongoconexion(urlmongoconexion);

async function mongoconexionclose() {
  try {
    await mongoose.connection.close();
    console.log("conexion cerrada ;(");
  } catch (error) {
    console.log(error);
  }
}

export { mongoconexion, mongoconexionclose };
