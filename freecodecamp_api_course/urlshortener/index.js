require("dotenv").config();
const express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

// parse info of forms
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

let urls = [];

// My dev
app.post("/api/shorturl", function (req, res) {
  let url = req.body.url;
  let regex = /^(http|https):\/\//;
  if (regex.test(url)) {
    urls.push(url);
    res.json({ original_url: url, short_url: 1 });
  } else {
    res.json({ error: "invalid url" });
  }
});

app.get("/api/shorturl/:short_urll", function (req, res) {
  let short_url = req.params.short_urll;
  if (short_url === "1") {
    res.redirect(urls[1]);
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
