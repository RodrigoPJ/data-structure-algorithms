var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11];

// Basic implementation (pivot is the first element of the array)
function quicksort (array) {
  if (array.length == 0) return [];

  let left = [], right = [], pivot = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return quicksort(left).concat(pivot,quicksort(right));
}

console.log(quicksort(array));
