const express =require('express');

const app = express();

app.get('/products', (req, res) => {
    res.send('lista de productos');
});

app.post('/products', (req, res) => {
    res.send('creando productos productos');
});

app.put('/products', (req, res) => {
    res.send('actualizando un producto');
});

app.delete('/products', (req, res) => {
    res.send('eliminando un producto');
});

app.patch('/products', (req, res) => {
    res.send('actualizando una parte del producto');
});


app.listen(3000);
console.log(`server en puerto ${3000}`);

