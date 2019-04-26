ex1 = [3, 2, 1, 1, 1];
ex2 = [4, 3, 2];
ex3 = [1, 1, 4, 1];

ex11 = [1, 1, 1, 1, 2];
ex12 = [3, 7];
ex13 = [1, 3, 1];

function equalStacks (h1, h2, h3) {  /*
    * Write your code here.
    */


   h1.reverse();
   h2.reverse();
   h3.reverse();
   let sum1 = h1.reduce((acc, cV) => acc + cV);
   let sum2 = h2.reduce((acc, cV) => acc + cV);
   let sum3 = h3.reduce((acc, cV) => acc + cV);

   while (sum1 != sum2 && sum2 != sum3) {
       if (sum1 >= sum2 && sum1 >= sum3) {
           let aux = h1.pop();
           sum1 = h1.reduce((acc, cV) => acc + cV);
       } else if (sum2 >= sum1 && sum2 >= sum3) {
           let aux = h2.pop();
           sum2 = h2.reduce((acc, cV) => acc + cV);
       } else if (sum3 >= sum1 && sum3 >= sum2) {
           let aux = h3.pop();
           sum3 = h3.reduce((acc, cV) => acc + cV);
       }
       if (h1.length === 0 || h2.length === 0 || h3.length === 0) {
           return 0;
       }
   }


   return sum1;


}

console.log (equalStacks (ex1, ex2, ex3));
console.log (equalStacks (ex11, ex12, ex13));
