const express = require('express');

const app = express();

app.get('/hello/:user', (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.user);
    res.send(`hello ${req.params.user.toUpperCase()}`);
});

app.get('/add/:x/:y', (req, res) => {

    // utilizando la desectructracion de JS
    const {x, y} = req.params;
    res.send(`resultado: ${parseInt(x) + parseInt(y)}`);
});

app.get('/users/:username/photo', (req, res) => {
    console.log(req.params.username);
    if(req.params.username === 'fazt') {
        return res.sendFile('./javascript.png',{
            root: __dirname
        });
    } else {
        res.send('el usuario no tiene acceso');
    }
});

app.get('/name/:nombre/age/:age', (req,res) => {
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});


app.listen(3000);
console.log('servidor en puerto 3000');