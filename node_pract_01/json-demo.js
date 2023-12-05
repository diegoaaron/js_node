const curso = require('./curso.json');

console.log(typeof curso);

console.log(curso.titulo);

let infoCurso = {
    "titulo": "aprende node.js",
    "numVistas": 45625,
    "numLikes": 21123,
    "temas": [
      "javascript",
      "node.js"
    ],
    "esPublico": true
  }

console.log(infoCurso);

// de objeto a cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);

console.log(typeof infoCursoJSON);

// de cadena de caracteres a objeto JS

let infoCursoJS = JSON.parse(infoCursoJSON);

console.log(infoCursoJS);

console.log(typeof infoCursoJS);

console.log(infoCursoJS.titulo);