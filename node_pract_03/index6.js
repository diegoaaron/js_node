const express = require('express');

const app = express();


app.all('/info',(req, res) => {
    res.send('info server');
});

app.get('/search', (req, res) => {
    console.log(req.query);
    if(req.query.q === 'javascript books') {
        res.send('lista de libros javascprit');
    } else {
        res.send('pagina normal');
    }
});

app.listen(3000);
console.log('server en puerto 3000');