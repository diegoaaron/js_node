const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MONGODB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

// SCHEMA - MODELS

const userSchema = new mongoose.Schema({
  username: { type: String },
});

let User = mongoose.model("User", userSchema);

const exeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date },
});

let Exe = mongoose.model("Exe", exeSchema);

// API
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// post create users

app.post("/api/users", function (req, res) {
  const inputUsername = req.body.username;
  let newUser = new User({ username: inputUsername });
  newUser.save();
  res.send({ username: newUser.username, _id: newUser._id });
});

// get read users
app.get("/api/users", async function (req, res) {
  let alldata = await User.find({});
  res.send(alldata);
});

// post add exercises
app.post("/api/users/:_id/exercises", async function (req, res) {
  let userId = req.params._id;
  let description = req.body.description;
  let duration = req.body.duration;
  let date = req.body.date;

  try {
    let user = await User.findById(userId);
    if (!user) {
      res.send("Unknown userId");
    } else {
      let newExe = new Exe({
        userId: userId,
        description: description,
        duration: duration,
        date: date ? new Date(date) : new Date(),
      });
      const exercise = await newExe.save();

      res.json({
        _id: user._id,
        username: user.username,
        description: exercise.description,
        duration: exercise.duration,
        date: new Date(exercise.date).toDateString(),
      });
    }
  } catch (error) {
    console.log(error);
    res.send("there was an error saving exercise");
  }
});

// GET LOGS

app.get("/api/users/:_id/logs", async (req, res) => {
  const { from, to, limit } = req.query;
  const id = req.params._id;
  const user = await User.findById(id);
  if (!user) {
    res.send("not user found");
  }
  let dataObj = {};
  if (from) {
    dataObj["$gte"] = new Date(from);
  }
  if (to) {
    dataObj["$lte"] = new Date(to);
  }
  let filter = {
    userId: id,
  };
  if (from || to) {
    filter.date = dataObj;
  }

  const exercises = await Exe.find(filter).limit(+limit);

  const log = exercises.map((exercise) => ({
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date.toDateString(),
  }));

  console.log({
    username: user.username,
    count: exercises.length,
    log: log,
  });

  res.send({
    username: user.username,
    count: exercises.length,
    log: log,
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
