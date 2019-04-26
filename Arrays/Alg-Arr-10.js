// Shuffle an array

const a = [0, 1, 2, 3, 4, 5, 6];


function shuffle (a) {
  let x;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor (Math.random () * (i + 1));
    x = a[i];
    a[i] = a[j]; 
    a[j] = x;
  }
  return a;
}

console.log (shuffle (a));
