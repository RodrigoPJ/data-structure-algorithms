// Largest 1's matrix in a binary

let binMatrix = [
  [1, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

function largestSquare (matrix) {
  let aux = [...matrix];
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 || j === 0) {
      } else if (matrix[i][j] > 0) {
        aux[i][j] =
          1 + Math.min (aux[i][j - 1], aux[i - 1][j], aux[i - 1][j - 1]);
      }
      if (aux[i][j] > result) {
        result = aux[i][j];
      }
    }
  }
  return result;
}

console.log (largestSquare (binMatrix));
