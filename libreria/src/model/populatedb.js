import { mongoconexion, mongoconexionclose } from "../../config/mongo.conexion.js";
import { Autor } from "../model/autor.model.js";
import { Libro } from "../model/libro.model.js";

// carga de data de prueba
// node -r dotenv/config populatedb.js dotenv_config_path=/home/diego/Documentos/migithub/js_node/libreria/.env dotenv_config_debug=true

let autores = [];
let libros = [];

async function registrarAutor(
  index,
  nombres,
  apellidos,
  basicfechaNacimiento,
  basicfechaMuerte
) {
  try {
    let fechaNacimiento = new Date(basicfechaNacimiento);
    let fechaMuerte;
    basicfechaMuerte === ""
      ? (fechaMuerte = "")
      : (fechaMuerte = new Date(basicfechaMuerte));
    let autorDetalle = { nombres, apellidos, fechaNacimiento, fechaMuerte };

    const autor = new Autor(autorDetalle);
    await autor.save();
    autores[index] = autor;
    console.log(`se agrega autor ${autor.nombres} con id: ${autor._id}`);
  } catch (error) {
    console.log(error);
  }
}

async function registrandoAutores() {
  console.log("Iniciando con el registro de autores...");
  await Promise.all([
    registrarAutor(0, "Patrick", "Rothfuss", "1973-06-06", ""),
    registrarAutor(1, "Ben", "Bova", "1932-11-8", ""),
    registrarAutor(2, "Isaac", "Asimov", "1920-01-02", "1992-04-06"),
    registrarAutor(3, "Bob", "Billings", "1988-11-02", ""),
    registrarAutor(4, "Jim", "Jones", "1971-12-16", ""),
  ]);
}

async function registrarLibro(index, autor, titulo, resumen, isbn, serie, genero) {
  try {
    let libroDetalle = { autor, titulo, resumen, isbn, serie, genero };

    const libro = new Libro(libroDetalle);
    await libro.save();
    libros[index] = libro;
    console.log(`se agrega el libro ${libro.titulo} con id: ${libro._id}`);
    await mongoconexionclose();
  } catch (error) {
    console.log(error);
  }
}

async function registrandoLibros() {
  console.log("Iniciando con el registro de libros...");
  await Promise.all([
    registrarLibro(
      0,
      ["657e27032d61d2750eb70e6e", "657e2b0afc26c4bb14ef051d"],
      "The Name of the Wind (The Kingkiller Chronicle, #1)",
      "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
      "9781473211896",
      "xyz1473211896",
      ["suspenso", "terror"]
    ),
    registrarLibro(1, "Ben", "Bova", "1932-11-8", ""),
    registrarLibro(2, "Isaac", "Asimov", "1920-01-02", "1992-04-06"),
    registrarLibro(3, "Bob", "Billings", "1988-11-02", ""),
    registrarLibro(4, "Jim", "Jones", "1971-12-16", ""),
  ]);
}

registrarLibro(
  0,
  "657e27032d61d2750eb70e6e",
  "The Name of the Wind (The Kingkiller Chronicle, #1)",
  "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
  "9781473211896",
  "xyz1473211896",
  "gatunos"
);

console.log(libros);

// await mongoconexionclose();
