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

const readAllBooks = async function (req, res) {
  try {
    let formatData = [];
    const allBooks = await Book.find().sort({ title: 1 });
    formatData = allBooks.map((book) => {
      let bk = {};
      bk.id = book._id;
      bk.title = book.title;
      bk.author = book.author;
      bk.summary = book.summary;
      bk.isbn = book.summary;
      bk.genre = book.genre;
      return book;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique Libros

const readUniqueBook = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueBook = await Book.findById(id);
    res.status(200).send(uniqueBook);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Libro with PUT

const putUpdateBook = async function (req, res) {
  try {
    let { id } = req.params;
    let { title, author, summary, isbn, genre } = req.body;
    const bookUpdated = await Book.findByIdAndUpdate(
      { _id: id },
      { title, author, summary, isbn, genre },
      { new: true }
    );
    res.status(200).send(bookUpdated);
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
