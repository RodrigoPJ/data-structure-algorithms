// 1-100 w/o for/conditionals


const auxArr = new Array (100);

function easyPrint (n) {
  console.log (101-n.length);
  n.pop ();
  let x = n.length - 1;
  try {
    let error = new Array (x);
  } catch (error) {
    return;
  }
  easyPrint (n);
}

easyPrint (auxArr);

