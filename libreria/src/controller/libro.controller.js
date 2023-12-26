import { Libro } from "../model/libro.model.js";
import { body, param, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

// parte autenticacion
const secretjwt = process.env.SECRETJWT;

// validacion de "Libro"
const validacionLibro = (method) => {
  switch (method) {
    case "addLibro": {
      return [
        body("autor", "autor no indicado").exists(),
        body("titulo", "titulo no indicados").exists(),
        body("resumen", "resumen no indicado").exists(),
        body("isbn", "isbn no indicado").exists(),
        body("serie", "serie no indicado").exists(),
        body("genero", "genero no indicado").exists(),
        body("estado", "estado no indicado").exists(),
      ];
    }
    case "putUpdateLibro": {
      return [
        param("id", "no se paso ID update").isLength({ min: 24, max: 24 }),
        body("autor", "autor no indicado").exists(),
        body("titulo", "titulo no indicados").exists(),
        body("resumen", "resumen no indicado").exists(),
        body("isbn", "isbn no indicado").exists(),
        body("serie", "serie no indicado").exists(),
        body("genero", "genero no indicado").exists(),
        body("estado", "estado no indicado").exists(),
      ];
    }
  }
};

// create Libro

const addLibro = async function (req, res) {
  try {
    // autenticación
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secretjwt);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expirado" });
    }

    // validacion
    let erroresValidacion = validationResult(req);

    if (erroresValidacion.isEmpty()) {
      let { autor, titulo, resumen, isbn, serie, genero, estado } = req.body;
      const libro = new Libro({
        autor,
        titulo,
        resumen,
        isbn,
        serie,
        genero,
        estado,
      });
      await libro.save();
      console.log(`Se ha registrado el nuevo libro con ID: ${libro._id}`);
      res.status(200).send(libro);
    } else {
      throw erroresValidacion;
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all Libros

const readAllLibros = async function (req, res) {
  try {
    let formatData = [];
    const allLibros = await Libro.find().sort({ title: 1 });
    formatData = allLibros.map((libro) => {
      let lib = {};
      lib.id = libro._id;
      lib.autor = libro.autor;
      lib.titulo = libro.titulo;
      lib.resumen = libro.resumen;
      lib.isbn = libro.isbn;
      lib.serie = libro.serie;
      lib.genero = libro.genero;
      lib.estado = libro.estado;
      return lib;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique Libros

const readUniqueLibro = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueLIbro = await Libro.findById(id);
    res.status(200).send(uniqueLIbro);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Libro with PUT

const putUpdateLibro = async function (req, res) {
  try {
    // autenticación
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secretjwt);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expirado" });
    }

    // validacion
    let erroresValidacion = validationResult(req);

    if (erroresValidacion.isEmpty()) {
      let { id } = req.params;
      let { autor, titulo, resumen, isbn, serie, genero, estado } = req.body;
      const libroUpdated = await Libro.findByIdAndUpdate(
        { _id: id },
        { autor, titulo, resumen, isbn, serie, genero, estado },
        { new: true }
      );
      res.status(200).send(libroUpdated);
    } else {
      throw erroresValidacion;
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Libro with PATCH

// delete Libros

const deleteLibro = async function (req, res) {
  try {
    // autenticación
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secretjwt);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expirado" });
    }

    let { id } = req.params;
    const libroDeleted = await Libro.findOneAndDelete({ _id: id });
    res.status(200).send(libroDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  validacionLibro,
  addLibro,
  readAllLibros,
  readUniqueLibro,
  putUpdateLibro,
  deleteLibro,
};
