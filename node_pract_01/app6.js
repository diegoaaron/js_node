const fs = require('fs');

// leer un archivo 

console.log('Antes de leer el archivo');

const archivo = fs.readFileSync('index.html','utf-8',(err, contenido) => {
  if(err) {
    // console.log(err);
    throw err;
  } else {
    console.log(contenido);
  }
  console.log('mensaje...');
});

console.log(archivo);

console.log('Despues de leer el archivo');

// renombrar un archivo

console.log('Antes de renombrar el archivo');

fs.renameSync('index.html', 'main.html', (err) => {
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente');
});

console.log('Despues de renombrar el archivo');

// agregar información a un archivo

console.log('Antes de agregar informacion al archivo');

fs.appendFileSync('main.html', '<p>Hola</p>', (err) => {
  if(err) {
    throw err;
  }
  console.log('Archivo actualizado.');
})

console.log('Despues de agregar informacion al archivo');

// reescribir un archivo

console.log('Antes de rescribir informacion al archivo');

fs.writeFileSync('main.html', 'Contenido Nuevo', (err) => {
  if(err) {
    throw err;
  }
  console.log('Archivo modificado...');
});

console.log('Despues de rescribir informacion al archivo');

// eliminar un archivo

console.log('Antes de eliminar informacion al archivo');

fs.unlinkSync('main.html', (err) => {
  if(err) {
    throw err;
  }
  console.log('Archivo eliminado...');
})

console.log('Despues de eliminar informacion al archivo');

