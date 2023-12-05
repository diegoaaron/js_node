const fs = require('fs');

/*
const first = fs.readFileSync('./data/first.txt','utf-8');

const second = fs.readFileSync('./data/second.txt');


console.log(first);
console.log(second.toString());

const title = 'este es el contenido del archivo';

fs.writeFileSync('./data/third.txt',title);
*/

fs.readFile('./data/first.txt','utf-8',(error, data) => {

    if (error) {
        console.log(error);
    } else {
        console.log(data);

        fs.readFile('./data/second.txt','utf-8',(error, data) => {

            if (error) {
                console.log(error);
            } else {
                console.log(data);
                fs.writeFile('./data/newfile.txt','archivo creado desde fs', (error, data) => {
                    console.log(error);
                    console.log(data);
                });
            }
        });
    }
});