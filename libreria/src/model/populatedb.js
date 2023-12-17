import { mongoconexion, mongoconexionclose } from "../../config/mongo.conexion.js";
import { Autor } from "../model/autor.model.js";
import { Libro } from "../model/libro.model.js";
import { VentaLibro } from "../model/ventalibro.model.js";

// carga de data de prueba
// node -r dotenv/config populatedb.js dotenv_config_path=/home/diego/Documentos/migithub/js_node/libreria/.env dotenv_config_debug=true

let autores = [];
let libros = [];
let ventalibros = [];

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

async function registrarLibro(
  index,
  autor,
  titulo,
  resumen,
  isbn,
  serie,
  genero,
  estado
) {
  try {
    let libroDetalle = { autor, titulo, resumen, isbn, serie, genero, estado };

    const libro = new Libro(libroDetalle);
    await libro.save();
    libros[index] = libro;
    console.log(`se agrega el libro ${libro.titulo} con id: ${libro._id}`);
  } catch (error) {
    console.log(error);
  }
}

async function registrandoLibros() {
  console.log("Iniciando con el registro de libros...");
  await Promise.all([
    registrarLibro(
      0,
      [autores[0], autores[1]],
      "The Name of the Wind (The Kingkiller Chronicle, #1)",
      "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
      "9781473211896",
      "xyz1473211896",
      ["suspenso", "terror"],
      "disponible"
    ),
    registrarLibro(
      1,
      autores[2],
      "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
      "Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.",
      "9788401352836",
      "abc1473211896",
      ["guerra", "remoanticismo"],
      "disponible"
    ),
    registrarLibro(
      2,
      autores[3],
      "The Slow Regard of Silent Things (Kingkiller Chronicle)",
      "Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.",
      "9780756411336",
      "ztu1473211896",
      "romanticismo",
      "disponible"
    ),
    registrarLibro(
      3,
      autores[4],
      "Apes and Angels",
      "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...",
      "9780765379528",
      "lli1473211896",
      "estoicismo",
      "disponible"
    ),
    registrarLibro(
      4,
      [autores[2], autores[3]],
      "Death Wave",
      "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
      "9780765379504",
      "ztu1473211896",
      "romanticismo",
      "disponible"
    ),
    registrarLibro(
      5,
      autores[1],
      "Death Wave",
      "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
      "9780765379504",
      "ztu1473211896",
      ["romanticismo", "historia"],
      "disponible"
    ),
    registrarLibro(
      6,
      autores[3],
      "Death Wave",
      "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
      "9780765379504",
      "ztu1473211896",
      "romanticismo",
      "disponible"
    ),
  ]);
}

async function registrarVentaLibro(index, nombreCliente, libro, correo, basicfechaVenta) {
  try {
    let fechaVenta;
    basicfechaVenta === ""
      ? (fechaVenta = new Date())
      : (fechaVenta = new Date(basicfechaVenta));
    let ventalibrodetalle = { nombreCliente, libro, correo, fechaVenta };

    const ventalibro = new VentaLibro(ventalibrodetalle);
    await ventalibro.save();
    ventalibros[index] = ventalibro;
    console.log(
      `se registra venta de libro(s) ${ventalibro.nombreCliente} con id: ${ventalibro._id}`
    );
    await mongoconexionclose();
  } catch (error) {
    console.log(error);
  }
}

registrarVentaLibro(
  0,
  "diego aaron",
  ["657e40e28ed85a1ac22c9ae1", "657e4145fb865ea610ad7483"],
  "diego@gmail.com",
  ""
);

// await mongoconexionclose();
