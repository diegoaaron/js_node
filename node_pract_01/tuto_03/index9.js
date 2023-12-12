const express = require('express');
const morgan = require('morgan');

const app = express();

// este middleware instalado, reemplaza al que esta comentado en la linea siguiente
app.use(morgan('dev'));

/*
app.use((req,res, next) => {
    console.log('paso por aqui');
    console.log(`route: ${req.url} motodo: ${req.method}`);
    next();
});
*/

app.get('/profile', (req, res) => {
    res.send('profile page');
});

app.use((req, res, next) => {
    if(req.query.login === 'fazt@faztweb.com') {
        next();
    } else{
        res.send('No autorizado');
    }
});

app.get('/dashboard', (req, res) => {
    res.send('dashboard page');
});


app.listen(3000);
console.log('server en puerto 3000');