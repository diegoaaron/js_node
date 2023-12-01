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

export { mongoconexion };
