import { Autor } from "../model/autor.model.js";
import { body, validationResult } from "express-validator";

// validacion de "create Autor"
const validate = (method) => {
  switch (method) {
    case "addAutor": {
      return [
        body("nombres", "nombre no indicado").exists(),
        body("apellidos", "apellidos no indicados").exists(),
        body("fechaNacimiento", "fecha de nacimiento vacia").exists(),
        body("fechaMuerte", "fecha de muerte vacia").exists(),
      ];
    }
  }
};

// create Autor

const addAutor = async function (req, res) {
  try {
    // validacion
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).send(errors.array());
    }

    // core de la funcion
    let { nombres, apellidos, fechaNacimiento, fechaMuerte } = req.body;
    fechaNacimiento = new Date(fechaNacimiento);
    fechaMuerte = new Date(fechaMuerte);
    const author = new Autor({
      nombres,
      apellidos,
      fechaNacimiento,
      fechaMuerte,
    });
    await author.save();
    console.log(`Se ha registrado el nuevo autor con ID: ${author._id}`);
    res.status(200).send(author);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all Authors

const readAllAutores = async function (req, res) {
  try {
    let formatData = [];
    const allAuthors = await Autor.find().sort({ lastName: 1 });
    formatData = allAuthors.map((autor) => {
      let aut = {};
      aut.id = autor._id;
      aut.nombres = autor.nombres;
      aut.apellidos = autor.apellidos;
      aut.fechaNacimiento = autor.fechaNacimiento;
      aut.fechaMuerte = autor.fechaMuerte;
      return aut;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique Author

const readUniqueAutor = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueAutor = await Autor.findById(id);
    res.status(200).send(uniqueAutor);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Author with PUT

const putUpdateAutor = async function (req, res) {
  try {
    let { id } = req.params;
    let { nombres, apellidos, fechaNacimiento, fechaMuerte } = req.body;
    fechaNacimiento = new Date(fechaNacimiento);
    fechaNacimiento = new Date(fechaNacimiento);
    const autorUpdated = await Autor.findOneAndUpdate(
      { _id: id },
      { nombres, apellidos, fechaNacimiento, fechaMuerte },
      { new: true }
    );
    res.status(200).send(autorUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Author with PATCH

// delete Author

const deleteAutor = async function (req, res) {
  try {
    let { id } = req.params;
    const autorDeleted = await Autor.findOneAndDelete({ _id: id });
    res.status(200).send(autorDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  validate,
  addAutor,
  readAllAutores,
  readUniqueAutor,
  putUpdateAutor,
  deleteAutor,
};
