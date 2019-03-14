// finding groups of one inside a binary matrix

let binMatrix = [
  [1, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
];

function largestSquare (matrix) {
  let aux = [...matrix];
  let mapOf1s = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 || j === 0) {
      } else if (matrix[i][j] > 0) {
        aux[i][j] =
          1 + Math.min (aux[i][j - 1], aux[i - 1][j], aux[i - 1][j - 1]);
      }
    }
  }
  for (let i = 0; i < aux.length; i++) {
    for (let j = 0; j < aux[i].length; j++) {
      if (aux[i][j] > 1 ) {
          mapOf1s.push (`There is a group at ${i},${j}`);
      }
    }
  }
  return mapOf1s;
}

let a = largestSquare (binMatrix);

console.log (a);
