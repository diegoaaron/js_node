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

export { addBook };
