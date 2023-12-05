const express = require('express');

const app = express();

const {infoCursos} = require('./datos/cursos.js'); // obteniendo los archivos con sintaxis de desestructuracion


// Routing

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);


// rutas básicas 

app.get('/', (req, res) => {
    res.send('Mi primer servidor con express. Cursos');
});

app.get('/api/cursos', (req, res) => {
    //res.send(infoCursos); // formato normal
    res.send(JSON.stringify(infoCursos)); // formato JSON
});




// puerto 

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});

