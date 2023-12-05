import express from 'express';
import {obtenerContactos, agregarContacto, borrarContacto} from './src/mysql_conector.js';
let todos;

const app = express();

// configuración de pug
app.set('views', './vistas');
app.set('view engine', 'pug');

// configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

// get raiz
app.get('/', (req, res) => {
    todos = obtenerContactos();
    res.render('index', {titulo:'aplicacion de contactos', contactos: todos});
});

app.get('/agregar/:nombre/:numero', (req, res) => {
    let nombre = req.params.nombre;
    let numero = req.params.numero;
    agregarContacto(numero,nombre);
    res.redirect('/');
})

app.get('/borrar/:id', (req, res) => {
    let id = req.params.id
    borrarContacto(id);
    res.redirect('/');
});

// configuracion del puerto
app.listen('8000', function() {
    console.log('aplicacion iniciada en el puerto 8000');
});


