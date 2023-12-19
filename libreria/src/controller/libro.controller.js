import { Libro } from "../model/libro.model.js";

// create Libro

const addLibro = async function (req, res) {
  try {
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
    let { id } = req.params;
    let { autor, titulo, resumen, isbn, serie, genero, estado } = req.body;
    const libroUpdated = await Libro.findByIdAndUpdate(
      { _id: id },
      { autor, titulo, resumen, isbn, serie, genero, estado },
      { new: true }
    );
    res.status(200).send(libroUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Libro with PATCH

// delete Libros

const deleteBook = async function (req, res) {
  try {
    let { id } = req.params;
    const bookDeleted = await Book.findOneAndDelete({ _id: id });
    res.status(200).send(bookDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addBook, readAllBooks, readUniqueBook, putUpdateBook, deleteBook };
