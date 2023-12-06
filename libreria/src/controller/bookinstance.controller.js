import { BookInstance } from "../model/bookinstance.model.js";

// create BookInstance

const addBookInstance = async function (req, res) {
  try {
    let { book, imprint, status, dueBack } = req.body;
    const bookInstance = new BookInstance({
      book,
      imprint,
      status,
      dueBack,
    });
    await bookInstance.save();
    console.log(
      `Se ha generado la nueva instancia de libro con código: ${bookInstance._id}`
    );
    res.status(200).send(bookInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addBookInstance };
