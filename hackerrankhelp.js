// Complete the miniMaxSum function below.
function miniMaxSum (arr) {
  let sums = [];
  let largest = 0;
  let minimum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr.reduce ((accum, cV, cI) => {
      if (cI == i) return accum;
      return accum + cV;
    }, 0);
    sums.push (sum);
  }
  largest = Math.max (...sums);
  minimum = Math.min (...sums);
  console.log (sums);
  console.log (minimum, largest);
}

miniMaxSum ([1, 2, 3, 4, 5]);

function timeConversion (s) {
  /*
     * Write your code here.
     */
  if (s[8] === 'P') {
    let numAux = parseInt (s[0] + s[1], 10) + 12;
    let strAux = numAux.toString ();
    if (s[0] + s[1] == 12) {
      strAux = '12';
    }
    let ans = strAux + ':' + s[3] + s[4] + ':' + s[6] + s[7];
    return ans;
  } else if (s[8] === 'A' && s[0] === '1' && s[1] === '2') {
    return '00' + s.substring (2, 8);
  } else {
    return s.substring (0, 8);
  }
}

console.log (timeConversion ('12:00:00PM'));



// Complete the climbingLeaderboard function below.

function climbingLeaderboard (scores, alice) {
  function addValue (arr1, v) {
    let pos = 0;
    let contain = false;
    for (let i = 0; i < arr1.length; i++) {
      if (v > arr1[i]) {
        arr1.splice (i, 0, v);
        pos = i;
        contain = true;
        break;
      }
    }
    if (!contain) {
      pos = arr1.length ;
      arr1.push (v);
    }
    return pos;
  }

  let ans = [];
  let scoresArr = [];
  let alicePosArr = [];
  for (let i = 0; i < alice.length; i++) {
      
    scoresArr.push ([...scores]);
  }

  let j = 0;
  scoresArr.forEach (v => {
    alicePosArr.push (addValue (v, alice[j]));
    j++;
  });

  let allPosArr = scoresArr.map ((val) => {
    let pos = 1;
    let posArr = [];
    posArr.push (pos);
    for (let i = 1; i < val.length; i++) {
      if (val[i - 1] === val[i]) {
        posArr.push (pos);
      } else {
        pos++;
        posArr.push (pos);
      }
    }
    return posArr;
  });
  for (let i = 0; i < alicePosArr.length; i++) {
      ans.push(allPosArr[i][alicePosArr[i]])
  }
  return ans;
}

console.log (
  climbingLeaderboard ([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);


var arr = [];
    var max = 0;
    // init each element of arr to 0
    for (let l = 0; l < n; l++) {
        arr[l] = 0;
    }
    // for each sum operation in queries
    for (let i = 0; i < queries.length; i++) {
       // update arr with number to add at index=queries[i][0]  
       //and number to remove at index=queries[i][0]+1 => this will allow us to build 
       //each element of the final array by summing all elements before it. 
       //The aim of this trick is to lower time complexity
        arr[queries[i][0]-1] += queries[i][2];
        if (queries[i][1] < arr.length) {
            arr[queries[i][1]] -= queries[i][2];
        }
    }
    for (let j = 1; j < n; j++) {
        arr[j] += arr[j-1];
    }
    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }
    //max = Math.max(...arr); // not working for big arrays
    return max;