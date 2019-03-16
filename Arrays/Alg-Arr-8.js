// Given two arrays of single-digit numbers, create a function that will add
// them and produce the result in the same format as the inputs. Example: a = [9,9].
//, b=[1] so o = [1,0,0]

const A = [9, 9];
const B = [1];

function sumReducer (arr1, arr2) {
  let res = [];
  let redArr1 = 0;
  let redArr2 = 0;

  arr1.forEach ((value, index) => {
    let aux = Math.pow (10, arr1.length - (index + 1));
    redArr1 = redArr1 + value * aux;
  });
  arr2.forEach ((value, index) => {
    let aux = Math.pow (10, arr2.length - (index + 1));
    redArr2 = redArr2 + value * aux;
  });

  let aux1 = redArr1 + redArr2;

  let aux2 = aux1.toString ();

  for (let i = 0; i < aux2.length; i++) {
      res.push(parseInt(aux2[i]));
  }
  return res;
}

console.log (sumReducer (A, B));
