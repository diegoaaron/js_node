function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log("antes");

mostrarTema('Node.js 1');

setTimeout(mostrarTema, 2000, 'Node.js 2');

function sumar(a, b) {
  console.log(a + b);
}

setTimeout(sumar, 2000, 5,6);

setImmediate(mostrarTema, 'Node.js 3');

console.log("despues");

setInterval(mostrarTema, 2000, 'Node.js 5');


setInterval(sumar, 2000, 2, 555);