/*
function pairwise(arr, arg) {
  let pairIndices = [];
  // Check every pair
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Exclude pairs that contain previously paired elements
      if (
        arr[i] + arr[j] == arg &&
        !pairIndices.includes(i) &&
        !pairIndices.includes(j)
      ) {
        pairIndices.push(i, j);
        break;
      }
    }
  }

  return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
}

let xyz = pairwise([1, 4, 2, 3, 0, 5], 7);
console.log(xyz);
*/

function pairwise(arr, arg) {
  let pairIndices = [];
  // revisando pares para sumar
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let cond1 = arr[i] + arr[j] === arg ? true : false;
      let cond2 = pairIndices.includes(i) ? false : true;
      let cond3 = pairIndices.includes(j) ? false : true;
      if (cond1 && cond2 && cond3) {
        pairIndices.push(i, j);
        break;
      }
      console.log(i, j, "-----------");
    }
  }
  console.log(pairIndices);
  let total = pairIndices.reduce((sum, curr) => sum + curr, 0);
  return total;
}
let xyz = pairwise([1, 3, 2, 4], 4);
console.log(xyz);
