import { Book } from "../model/book.model.js";

// create Book

const addBook = async function (req, res) {
  try {
    let { title, author, summary, isbn, genre } = req.body;
    const book = new Book({
      title,
      author,
      summary,
      isbn,
      genre,
    });
    await book.save();
    console.log(`Se ha generado el nuevo usuario con ID: ${book._id}`);
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all Book

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

// read unique Book

const readUniqueBook = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueBook = await Book.findById(id);
    res.status(200).send(uniqueBook);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Book with PUT

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

// update Author with PATCH

// delete Book

const deleteBook = async function (req, res) {
  try {
    let { id } = req.params;
    const bookDeleted = await Book.findOneAndDelete({ _id: id });
    res.status(200).send(bookDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete Author

// const deleteAuthor = async function (req, res) {
//     try {
//       let { id } = req.params;
//       const authorDeleted = await Author.findOneAndDelete({ _id: id });
//       res.status(200).send(authorDeleted);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   };

export { addBook, readAllBooks, readUniqueBook, putUpdateBook, deleteBook };
