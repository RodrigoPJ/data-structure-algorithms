function cookies(k, A) {
    /*
     * Write your code here.
     */
    let mArr = [...A];
    mArr.sort((a, b) => a > b?1:b>a? -1:0);
    console.log( mArr);
    let i = 0;
    while (mArr[0] < k) {
        let x = mArr[0] + 2 * mArr[1];
        mArr.splice(0, 2);
        let j = 0;
        while(x>mArr[j]){
            j++
        };
        mArr.splice(j,0,x);
        i++
        if (i >= A.length) return -1;
     }
    // console.log(A);
    return i;

}

let k1=3581;

let arr1 = [
    6214, 8543, 9266, 1150, 7498, 7209, 9398, 1529, 1032,7384,6784,34,1449 ,7598, 8795 ,756 ,7803, 4112, 298, 4967, 1261, 1724, 4272, 1100, 9373];

let k2 = 10;
let arr2 = [1,1,1]

function cookies2(k, A) {
    A.sort((a,b)=>a-b)
    let ops = 0;
    while (A[0] < k && A.length > 1) {
      ops++;
      let calc = (A[0] * 1) + (A[1] * 2);
      A.splice(0, 2);
      let inserted = false
      if (A.length === 0) { // when the array is empty after splice
        A.push(calc);
      } else {
        for (var i = 0; i < A.length && !inserted; i++) {
          if (A[A.length - 1] < calc) {
            A.push(calc)
            inserted = true
          } else if (A[i] >= calc) {
            A.splice(i, 0, calc);
            inserted = true
          }
        }
      }
    }
    if (A[0] < k) {
      ops = -1;
    }
    return ops;
  }

console.log(arr1.length);
console.log(cookies(k1,arr1));
console.log(cookies(k2,arr2));