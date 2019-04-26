{
  let str = '8 4\n1 2 3 4 5 6 7 8\n1 2 4\n2 3 5\n1 4 7\n2 1 4';
  let regex1 = /.+[^\n]/g;
  let aux1 = str.match (regex1);
  console.log (aux1);
  let mainArray = aux1[1].split (' ');
  console.log (mainArray);
  console.log (parseInt (mainArray[2]) + parseInt (mainArray[3]));
}

function processData (input) {
  //Enter your code here
  let regexp1 = /.+[^\n]/g;
  let aux1 = input.match (regexp1);
  let mainArray = aux1[1].split (' ').map (Number);

  for (let i = 2; i < aux1.length; i++) {
    let currQuerie = aux1[i].split (' ').map (Number);
    querieOp (mainArray, currQuerie);
  }
  //console.log(aux1)
  //console.log(mainArray[parseInt (aux1[1])])
  console.log (Math.abs (mainArray[0] - mainArray[mainArray.length-1]));
  console.log (...mainArray);

  function querieOp (array, querie) {
    if (querie[0] == 1) {
      let aux2 = querie[2] - querie[1] + 1;
      let removed = array.splice (querie[1] - 1, aux2);
      array.splice (0, 0, ...removed);
      // return array;
    } else {
      let aux2 = querie[2] - querie[1] + 1;
      let removed = array.splice (querie[1] - 1, aux2);
      for (let i = 0; i < removed.length; i++) {
        array.push (removed[i]);
      }
      // return array
    }
  }
}
let str = '8 4\n1 2 3 4 5 6 7 8\n1 2 4\n2 3 5\n1 4 7\n2 1 4';
let str1 = `10 10\n20134 28908 23575 30031 26471 11792 16564 23710 13902 26144\n2 3 4\n1 5 9\n2 1 3\n1 2 2\n2 1 1\n1 4 6\n2 4 8\n1 4 6\n2 1 1\n1 5 6`;
let a = processData(str1);


function getNodeValue(head, position) {
    var stack = [];
    var curNode = head;
    
    while(curNode) {
        stack.push(curNode.data);
        curNode = curNode.next;
    }
    
    while(position) {
        stack.pop();
        position--;
    }
    
    return stack.pop();
}