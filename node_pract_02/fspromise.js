const {readFile} = require('fs/promises');


// para indicar que el codigo es asincrono indicamos "await" pero permite escribir y manejarlo como si fuera sincrono. 

async function read() {
try {
    const result = await readFile('./data/first.txt','utf-8');
    const result2 = await readFile('./data/second.txt','utf-8');
    console.log(result);
    console.log(result2);
} catch(e) {
    console.log(e);
}
}


 read();