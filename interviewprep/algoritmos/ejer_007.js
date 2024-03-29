function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    // ingresamos mientras valor del segundo array es mayor al primero
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

let resultado = insertionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);

console.log(resultado);
