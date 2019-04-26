console.log(6%4);
let lastAnswer = 7;
let n = 2;
let x = 1;
let y = 3;
console.log((x^lastAnswer)%n);

let aux = y;

function processData(input) {
    // get `n` and `d` from input
    const lines = input.split('\n');
    const firstLine = lines[0].split(' ').map(Number);
    const n = firstLine[0];
    const d = firstLine[1];
  
    // process each line
    lines.slice(1, lines.length).forEach(line => {
      // no need to shift in these cases
      if (n === 1 || d === n) {
        console.info(line);
      } else {
        // shift digits
        const a = line.split(' ').map(Number);
        let lastLastItem = null;
        let count = 0;
        let i = 0;
        while (count < n) {
          i++;
          const start = i;
          let j = start;
          do {
            count++;
            let lastItem = lastLastItem;
            lastLastItem = a[j];
            a[j] = lastItem;
            j = shiftLeft(n, d, j);
          } while (j !== start);
          a[start] = lastLastItem;
        }
        console.info(a.reduce((acc, value) => {
          return acc+' '+value;
        }));
      }
    });
  }
  
  /**
   * @param {Number} n total number of elements
   * @param {Number} d number of shifts to left
   * @param {Number} i index to begin shifting from
   * @returns {Number} new index after shifting to left
   */
  function shiftLeft(n, d, i) {
    return (n-d+i)%n;
  }


//console.log(6%4);
//console.log(6%4);