import { mongoconexion, mongoconexionclose } from "../../config/mongo.conexion.js";
import { Autor } from "../model/autor.model.js";

// carga de data de prueba
// node -r dotenv/config populatedb.js dotenv_config_path=/home/diego/Documentos/migithub/js_node/libreria/.env dotenv_config_debug=true

const autores = [];

async function registrarAutor([
  nombres,
  apellidos,
  basicfechaNacimiento,
  basicfechaMuerte,
]) {
  try {
    let fechaNacimiento = new Date(basicfechaNacimiento);
    let fechaMuerte = new Date(basicfechaMuerte);
    // console.log(fechaNacimientoEdit, fechaMuerteEdit);
    let autorDetalle = { nombres, apellidos, fechaNacimiento, fechaMuerte };
    console.log(autorDetalle);
    const autor = new Autor(autorDetalle);
    await autor.save();
    console.log(`Se ha generado el nuevo usuario con ID: ${autor._id}`);
    await mongoconexionclose();
  } catch (error) {
    console.log("errror en registrar usuario", error);
  }
}

await registrarAutor(["diego", "damian", "1981-12-11", "2020-11-11"]);
