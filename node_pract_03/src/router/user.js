const express = require('express');

//router
const app = express.Router();

app.get('/users', (req,res) => {
    res.render('users');
});

// exportando router
module.exports = app;