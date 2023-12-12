const express = require("express");
const path = require('path');
const morgan = require('morgan');
const connectDB1 = require('./db');
require('ejs');

connectDB1.connectDB();

const app = express();

//settings
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'));

//routes
const HomeRoutes = require('./router/home');
const UserRoutes = require('./router/user');

//middleware
app.use("/public",express.static(path.join(__dirname,'public')))
app.use("/uploads",express.static(path.join(__dirname,'uploads')))

app.use(HomeRoutes);
app.use(UserRoutes);



// GET
app.get("/profile", (req, res) => {
  res.send("web perfil");
});

app.get("/note.txt", (req, res) => {
    res.send("este no es un archivo note.txt");
  });

app.listen(3000);
console.log(`server en puerto ${3000}`);
