const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url);

    if(request.url === '/') {
        response.write('hello world');
        return response.end();
    }
    
    if (request.url === '/about') {
        response.write('estas en about');
        return response.end();
    }

    response.write(`<h1>Not found</h1>
    <p>esta página no se encontro</p>
    <a href="/">voler a la pagina principal</a>`);
    response.end();

    
});

server.listen(3000);

console.log('servidor en el puerto 3000');

