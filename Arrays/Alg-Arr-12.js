// implement a circular qeue

class CircularQueue {
  constructor (size) {
    this.Queue = new Array (size);
    for (let i = 0; i < size; i++) {
      this.Queue[i] = null;
    }
    this.head = 0;
    this.tail = 0;
  }
  isFull () {
    let fullness = this.Queue.find (e => e === null);
    if (fullness === undefined) return true;
    return false;
  }

  isEmpty () {
    let emptyness = [];
    this.Queue.forEach (v => {
      if (v === null) {
        emptyness.push (null);
      }
    });
    if (emptyness.length === this.Queue.length) return true;
    return false;
  }

  AddtoQ (n) {
    this.Queue[this.tail] = n;
    this.head++;
    this.tail = (this.tail+1)%this.Queue.length;

  }

  deleteFromQ () {
      this.Queue[this.head%this.Queue.length]=null;
      this.head++;
  }

  clearQ () {}
}



let try1 = new CircularQueue (6);
try1.AddtoQ (1);
try1.AddtoQ (2);
try1.AddtoQ (3);
try1.AddtoQ (4);
try1.AddtoQ (5);
try1.AddtoQ (6);
try1.AddtoQ (7);
try1.deleteFromQ();
try1.deleteFromQ();
try1.AddtoQ (8);

console.log(try1.Queue)
console.log (try1.isFull ());
console.log (try1.isEmpty ());
