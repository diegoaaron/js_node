//intercambiamos valores utilizando desestructuración (ES6)
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

// Obtenemos el punto de pivote fijo (hay 2 parametros con valores por defecto)
function pivot(arr, left = 0, right = arr.length - 1) {
  let shift = left;

  for (let i = left + 1; i <= right; i++) {
    // Movemos los elementos pequeños al lado izquierdo
    if (arr[i] < arr[left]) {
      swap(arr, i, ++shift);
    }
  }

  // Finalmente intercambiamos el último elemento con el de la izquierda
  swap(arr, left, shift);

  return shift;
}

// funcion principal de ordenamiento con recursividad (hay 2 parametros con valores por defecto)
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

let resultado = quickSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);

console.log(resultado);
