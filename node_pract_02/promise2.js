const {readFile} = require('fs');
const {promisify} = require('util');

const readFilePromise = promisify(readFile);

/*
const getText = (pathFile) => {
    return new Promise(function(resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        });
    });
}
*/

/*
getText('./data/first.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/second.txt'))
    .then(result => console.log(result))
    .catch((error) => console.log(error))
*/

// para indicar que el codigo es asincrono indicamos "await" pero permite escribir y manejarlo como si fuera sincrono. 

async function read() {
try {
    const result = await readFilePromise('./data/first.txt','utf-8');
    const result2 = await readFilePromise('./data/second.txt','utf-8');
    console.log(result);
    console.log(result2);
} catch(e) {
    console.log(e);
}
}


 read();