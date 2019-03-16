// rotate a matrix 90

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // reverse the rows
  matrix = matrix.reverse ();

  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

let exMatrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],[13,14,15,16]];

console.log(exMatrix)
rotate(exMatrix);
console.log(exMatrix)

