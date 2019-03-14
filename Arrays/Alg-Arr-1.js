// Maximum value of an array without using for

a = [0, 2, 5, 4, 53, 8, 0, 0, 456, 23];
/*Returns the maximum value of the array given without 
**using for cycles
 */
function maxVal (array) {
  if (array.length > 1) {
    if (array[array.length - 1] > array[array.length - 2]) {
      array.splice (array.length - 2, 1);
      maxVal (array);
    } else {
      array.splice (array.length - 1, 1);
      maxVal (array);
    }
  }
  return array[0];
}

console.log (maxVal (a)); // 456
