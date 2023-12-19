import { VentaLibro } from "../model/ventalibro.model.js";

// create VentaLibro

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
    console.log(`Se ha generado la venta del libro con ID: ${bookInstance._id}`);
    res.status(200).send(bookInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all VentaLibro

const readAllBookInstance = async function (req, res) {
  try {
    let formatData = [];
    const allBookInstance = await BookInstance.find().sort({ book: 1 });
    formatData = allBookInstance.map((bookInstance) => {
      let bkInst = {};
      bkInst.id = bookInstance._id;
      bkInst.book = bookInstance.book;
      bkInst.imprint = bookInstance.imprint;
      bkInst.status = bookInstance.status;
      bkInst.dueBack = bookInstance.dueBack;
      return bkInst;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique VentaLibro

const readUniqueBookInstance = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueBookInstance = await BookInstance.findById(id);
    res.status(200).send(uniqueBookInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update VentaLibro with PUT

const putUpdateBookInstance = async function (req, res) {
  try {
    let { id } = req.params;
    let { book, imprint, status, dueBack } = req.body;
    const bookInstanceUpdated = await BookInstance.findByIdAndUpdate(
      { _id: id },
      { book, imprint, status, dueBack },
      { new: true }
    );
    res.status(200).send(bookInstanceUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update VentaLibro with PATCH

// delete VentaLibro

const deleteBookInstance = async function (req, res) {
  try {
    let { id } = req.params;
    const bookInstanceDeleted = await BookInstance.findOneAndDelete({ _id: id });
    res.status(200).send(bookInstanceDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  addBookInstance,
  readAllBookInstance,
  readUniqueBookInstance,
  putUpdateBookInstance,
  deleteBookInstance,
};
