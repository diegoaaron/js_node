const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Hola mundo! x2');
})

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`escuchando en el puerto ${PUERTO}`);
});