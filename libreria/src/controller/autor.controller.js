import { Autor } from "../model/autor.model.js";
import { body, param, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

// parte autenticacion
const secretjwt = process.env.SECRETJWT;

// funcion para devolver token
const obtenertoken = async function (req, res) {
  // el user se debe obtener de una BD
  const { id: sub, name } = { id: "usr01", name: "diego" };
  const token = jwt.sign(
    {
      sub,
      name,
      exp: Date.now() + 180 * 1000,
    },
    secretjwt
  );
  res.send({ token });
};

// validacion de "Autor"
const validacionAutor = (method) => {
  switch (method) {
    case "addAutor": {
      return [
        body("nombres", "nombre no indicado").exists(),
        body("apellidos", "apellidos no indicados").exists(),
        body("fechaNacimiento", "fecha de nacimiento vacia").exists(),
        body("fechaMuerte", "fecha de muerte vacia").exists(),
      ];
    }
    case "putUpdateAutor": {
      return [
        param("id", "no se paso ID update").isLength({ min: 24, max: 24 }),
        body("nombres", "nombre no indicado update").exists(),
        body("apellidos", "apellidos no indicados update").exists(),
        body("fechaNacimiento", "fecha de nacimiento vacia update").exists(),
        body("fechaMuerte", "fecha de muerte vacia update").exists(),
      ];
    }
  }
};

// create Autor

const addAutor = async function (req, res) {
  try {
    // autorizacion
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secretjwt);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expirado" });
    }

    // validacion
    let erroresValidacion = validationResult(req);

    if (erroresValidacion.isEmpty()) {
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
    } else {
      throw erroresValidacion;
    }
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
    // autorización
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secretjwt);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expirado" });
    }

    // validacion
    let erroresValidacion = validationResult(req);

    if (erroresValidacion.isEmpty()) {
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
    } else {
      throw erroresValidacion;
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Author with PATCH

// delete Author

const deleteAutor = async function (req, res) {
  try {
    // autorización
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secretjwt);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expirado" });
    }

    let { id } = req.params;
    const autorDeleted = await Autor.findOneAndDelete({ _id: id });
    res.status(200).send(autorDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  obtenertoken,
  validacionAutor,
  addAutor,
  readAllAutores,
  readUniqueAutor,
  putUpdateAutor,
  deleteAutor,
};
