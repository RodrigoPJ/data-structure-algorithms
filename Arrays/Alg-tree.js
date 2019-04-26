class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node (5);

// console.log (root);

class BST {
  constructor () {
    this.root = null;
  }
  add (v) {
    if (this.root === null) {
      this.root = new Node (v);
      return;
    }
    this.insertNode (this.root, new Node (v));
  }
  insertNode (root, newNode) {
    if (newNode.value > root.value && root.right === null) {
      root.right = newNode;
    } else if (newNode.value < root.value && root.left === null) {
      root.left = newNode;
    } else if (newNode.value > root.value) {
      this.insertNode (root.right, newNode);
    } else if (newNode.value < root.value) {
      this.insertNode (root.left, newNode);
    }
  }
  find (v) {
    return this.findNode (v, this.root);
  }
  findNode (v, node) {
    if (node === null) {
      return false;
    }
    if (node.value === v) {
      return true;
    } else if (v > node.value) {
      return this.findNode (v, node.right);
    } else if (v < node.value) {
      return this.findNode (v, node.left);
    }
    return false;
  }
}

const mytree = new BST ();
mytree.add (5);
mytree.add (4);
mytree.add (7);
mytree.add (8);
mytree.add (2);
mytree.add (6);
mytree.add (3);
mytree.add (9);
mytree.add (10);

console.log (mytree);
console.log (mytree.find (0));
