// Funcion que intercambia el contenido de las variables
function swap(array, index1, index2) {
  let tmp;
  tmp = array[index1];
  array[index1] = array[index2];
  array[index2] = tmp;
}

function permAlone(str) {
  // Creamos una expresión regular que filtre las cadenas con palabras repetidas
  let regex = /(.)\1+/;

  // Dividiendo la cadena en un array de caracteres individuales
  const arr = str.split("");
  const permutations = [];

  // Retornando 0 si toda la cadena tiene caracteres iguales
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Genera arrays de las permutaciones utilizando el algoritmo HEAP
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i != int; ++i) {
        generate(int - 1);
        swap(arr,int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter(function (string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
let xyz = permAlone("aab");
console.log(xyz);
