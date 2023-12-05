//console.log(module);

const myWebAddress = "google.com";
const myNumber = 30;
const myArray = [10, 20, 30];
const user = {
    name: "ryan",
    lastname: "beyer"
}

module.exports.user = user;
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
module.exports.myWebAddress = myWebAddress;

/*
module.exports = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}
*/

// console.log(module);