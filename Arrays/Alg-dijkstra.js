class GraphWithDistance {
  constructor (n) {
    this.noOfVertices = n;
    this.AdjList = new Map ();
  }
  addVertex (v) {
    this.AdjList.set (v, []);
  }
  addEdge (v, w, d) {
    this.AdjList.get (v).push ({vert: w, d});
    this.AdjList.get (w).push ({vert: v, d});
  }
  dijsktra (startNode) {
    let keys = this.AdjList.keys ();
    let visited = {startNode:0}
    

    console.log(keys.next().value)
    console.log(keys.next().value)
  }
}

const myGraph = new GraphWithDistance (9);
// we create a graph, first a for cycle for nodes 0 to 8

for (var i = 0; i < 9; i++) {
  myGraph.addVertex (i);
}

myGraph.addEdge (0, 1, 4);
myGraph.addEdge (0, 7, 8);
myGraph.addEdge (1, 2, 8);
myGraph.addEdge (1, 7, 11);
myGraph.addEdge (2, 3, 7);
myGraph.addEdge (2, 8, 2);

myGraph.dijsktra();