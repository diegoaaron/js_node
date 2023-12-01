import { User } from "../model/usuarios.model.js";

// create user

const addUser = async function (req, res) {
  try {
    let { firstName, lastName, email, dateOfBirthday } = req.body;
    dateOfBirthday = new Date(dateOfBirthday);
    const user = new User({ firstName, lastName, email, dateOfBirthday });
    await user.save();
    console.log(`Se ha generado el nuevo usuario con ID: ${user._id}`);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read all users

const readAllUser = async function (req, res) {
  try {
    let formatData = [];
    const allUsers = await User.find().sort({ lastName: 1 });
    formatData = allUsers.map((user) => {
      let usr = {};
      usr.id = user._id;
      usr.firstName = user.firstName;
      usr.lastName = user.lastName;
      usr.email = user.email;
      usr.dateOfBirthday = user.dateOfBirthday;
      return usr;
    });
    res.status(200).send(formatData);
  } catch (error) {
    res.status(500).send(error);
  }
};

// read unique user

const readUniqueUser = async function (req, res) {
  try {
    let { id } = req.params;
    const uniqueUser = await User.findById(id);
    console.log(uniqueUser.age);
    res.status(200).send(uniqueUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// update user

const updateUser = async function (req, res) {
  try {
    let { id } = req.params;
    let { firstName, lastName, email, dateOfBirthday } = req.body;
    dateOfBirthday = new Date(dateOfBirthday);
    const userUpdated = await User.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, email, dateOfBirthday },
      { new: true }
    );
    res.status(200).send(userUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete user

const deleteUser = async function (req, res) {
  try {
    let { id } = req.params;
    const userDeleted = await User.findOneAndDelete({ _id: id });
    res.status(200).send(userDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addUser, readAllUser, readUniqueUser, updateUser, deleteUser };
