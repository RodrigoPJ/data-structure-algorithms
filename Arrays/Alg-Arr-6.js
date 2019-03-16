// merge two arrays when one has space at the end

const ex1 = [1, 2, 3, 0,0,0];
const ex2 = [4, 5];

//Determining number of zeroes at the end of the array

function emptySpace (arr) {
  if (arr[arr.length - 1] != 0) return false;
  let result = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      result++;
    }
  }
  return result;
}

console.log(emptySpace(ex1))
console.log(emptySpace(ex2))

function mergeTwo (arr1, arr2) {
  let aux1 = arr1.length;
  let aux2 = arr2.length;
 if (emptySpace(arr1)>=arr2.length){
     for(let i = 0;i<arr2.length;i++){
         arr1.splice(arr1.length-emptySpace(arr1),1,arr2[i]);
     }
     return arr1
 }
 return 'Not enough space'
}

console.log(mergeTwo(ex1,ex2))
console.log(mergeTwo(ex2,ex1))
