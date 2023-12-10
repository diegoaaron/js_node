// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// first url
app.get("/api", function (req, res) {
  let unix = new Date().getTime();
  let utc = new Date().toUTCString();
  res.json({ unix, utc });
});

app.get("/api/:date", function (req, res) {
  let timeInit = req.params.date;
  let anotherTime = new Date(timeInit);

  console.log(typeof anotherTime, anotherTime);

  const timestampRegex = /^\d{13}$/;
  const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (timeInit.match(fechaRegex)) {
    let unix = new Date(timeInit).getTime();
    let utc = new Date(timeInit).toUTCString();
    res.json({ unix, utc });
  } else if (timeInit.match(timestampRegex)) {
    let unix = new Date(+timeInit).getTime();
    let utc = new Date(+timeInit).toUTCString();
    res.json({ unix, utc });
  } else if (anotherTime.getTime()) {
    let unix = new Date(timeInit).getTime();
    let utc = new Date(timeInit).toUTCString();
    console.log("formato_base", unix, utc);
    res.json({ unix, utc });
  } else {
    res.json({ error: "Invalid Date" });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
