const { readdirSync } = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write("hola");
        return res.end();
    }

    if(req.url === '/about') {

        for(let i = 0; i <100000; i++){
            console.log(Math.random()*i);
        }

        return res.end('About page');
    }

    res.end('not found');

});

server.listen(3000);
console.log('server on 3000');