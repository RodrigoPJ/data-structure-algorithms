// Any MxN matrix, if an element is zer, make it's row and column all zeroes

const matrix = [
  [1, 2, 5, 4, 5, 6, 4, 3, 5],
  [4, 4, 1, 8, 0, 1, 2, 6, 9],
  [4, 8, 1, 8, 5, 1, 5, 6, 9],
];

 console.log (matrix);

function zeroFinderAmultiplier (arr) {
  let aux = [...arr];
  let zerAddress = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        zerAddress.push ([i, j]);
      }
    }
  }
  zerAddress.forEach(v=>{
      aux.splice(v[0],1,new Array(aux[0].length).fill(0));
      for (let i = 0; i < arr.length; i++) {
         aux[i].splice(v[1],1,0)
      }
  });
  return aux;
}

console.log (zeroFinderAmultiplier (matrix));
