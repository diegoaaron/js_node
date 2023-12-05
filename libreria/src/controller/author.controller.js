import { Author } from "../model/author.model.js";

// create Author

const addAuthor = async function (req, res) {
  try {
    let { firstName, lastName, email, dateOfBirthday, dateOfDeath } = req.body;
    dateOfBirthday = new Date(dateOfBirthday);
    dateOfDeath = new Date(dateOfDeath);
    const author = new Author({
      firstName,
      lastName,
      email,
      dateOfBirthday,
      dateOfDeath,
    });
    await author.save();
    console.log(`Se ha generado el nuevo usuario con ID: ${author._id}`);
    res.status(200).send(author);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all Authors

const readAllAuthors = async function (req, res) {
  try {
    let formatData = [];
    const allAuthors = await Author.find().sort({ lastName: 1 });
    formatData = allAuthors.map((author) => {
      let auth = {};
      auth.id = author._id;
      auth.firstName = author.firstName;
      auth.lastName = author.lastName;
      auth.email = author.email;
      auth.dateOfBirthday = author.dateOfBirthday;
      auth.dateOfDeath = author.dateOfDeath;
      return auth;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique Author

const readUniqueAuthor = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueAuthor = await Author.findById(id);
    res.status(200).send(uniqueAuthor);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Author with PUT

const putUpdateAuthor = async function (req, res) {
  try {
    let { id } = req.params;
    let { firstName, lastName, email, dateOfBirthday, dateOfDeath } = req.body;
    dateOfBirthday = new Date(dateOfBirthday);
    dateOfDeath = new Date(dateOfDeath);
    const authorUpdated = await Author.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, email, dateOfBirthday, dateOfDeath },
      { new: true }
    );
    res.status(200).send(authorUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update Author with PATCH

// delete Author

const deleteAuthor = async function (req, res) {
  try {
    let { id } = req.params;
    const authorDeleted = await Author.findOneAndDelete({ _id: id });
    res.status(200).send(authorDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addAuthor, readAllAuthors, readUniqueAuthor, putUpdateAuthor, deleteAuthor };

// pendiente crear funcion para actualización con PATCH