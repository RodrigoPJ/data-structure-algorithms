// Given an array with values ranging from 0 to n-1, swap each array location
// with the value on the nth position with a[a[n]]

const n = 5;

let a = [2, 0, 1, 4, 3];

let res = [1, 1, 1, 3, 3];

function weirdThing (array) {
  for (let i = 0; i < array.length; i++) {
      array[i]= array[array[i]];
  }
  return array;
}

console.log (weirdThing (a));
