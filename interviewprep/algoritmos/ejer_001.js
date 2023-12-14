function sym(...args) {
  // evaluacion de arrays enviados
  const summary = args.reduce(getDiff, []);

  // depurando valores duplicados
  const unique = summary.filter((elem, index, arr) => index === arr.indexOf(elem));
  return unique;
}

// Retorna la diferencia simétrica
function getDiff(arr1, arr2) {
  let arr1diff = arr1.filter((i) => arr2.indexOf(i) === -1);
  let arr2diff = arr2.filter((i) => arr1.indexOf(i) === -1);

  return arr1diff.concat(arr2diff);
}

let abc = sym([1, 2, 3], [5, 2, 1, 4]);

console.log(abc);
