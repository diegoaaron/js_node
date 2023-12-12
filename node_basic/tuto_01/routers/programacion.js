const express = require('express');

const routerProgramacion = express.Router();

const {programacion} = require('../datos/cursos.js').infoCursos;

// Middleware
routerProgramacion.use(express.json());

// ruta con parametro programacion

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontro cursos de ${lenguaje}`);
    }

    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados === 0) {
        return res.status(404).send(`No se encontro el curso ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));

});

routerProgramacion.post('/',(req, res) => {
    let cursoNuevo = req.body;

    programacion.push(cursoNuevo);

    res.send(JSON.stringify(programacion));
});


// PUT envia todas las propiedades de un elemento

routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion[indice] = cursoActualizado;
    } else {
        return res.status(404).send(`No se encontro el item`);
    }

    res.send(JSON.stringify(programacion));

});

// PATCH, permite enviar solo las propiedades especificas que se modifican del objeto 

routerProgramacion.patch('/:id',(req, res) => {
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar,infoActualizada);
    }

    res.send(JSON.stringify(programacion));

});

// DELETE elimina 

routerProgramacion.delete('/:id',(req,res) => {
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        programacion.splice(indice, 1);
    }

    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;

