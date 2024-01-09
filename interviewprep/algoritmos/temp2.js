// if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
function ls(str) {
  let regex = /(.)\1+/;
  let x = str.match(regex);

  console.log(x);

  if (x !== null) {
    console.log("la cadena no es null");
  }
  if (x[0] === str) {
    console.log("todo los caracteres son iguales");
  }
}

ls("aaa");
