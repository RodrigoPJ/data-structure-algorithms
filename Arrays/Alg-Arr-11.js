// Write a function that will reverse N sized blocks of an array.

const a = [0,1,0,0,1,2,3,0,0,0,0];
/**
 * Reverses a block inside an array with a given start poin or where
 * the block starts
 * @param {Array} array 
 * @param {Number} blockSize size of the block you want to reverse
 * @param {Number} startPoint where you want to begin
 */
export function revBlock(array, blockSize,startPoint){
    let aux1 = [];
    for (let i=startPoint;i<startPoint+blockSize;i++){
        aux1.push(array[i]);
    }
    aux1.reverse();
    let j = 0;
    console.log(aux1)
    for (let i=startPoint;i<startPoint+blockSize;i++){
        array[i]=aux1[j];
        j++;
    }
return array;
}

console.log(revBlock(a,3,4))
