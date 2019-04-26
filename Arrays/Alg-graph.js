class Queue{
  constructor(){
    this.items = [];
  }
  enqueue(e){
    this.items.push(e); 
  }
  dequeue(){
    if(this.isEmpty()){
      return 'underflow'
    }
    return this.items.shift();
  }
  front(){
    if (this.isEmpty()) return 'no elements on queue';
    return this.items[0]
  }
  isEmpty(){
    return this.items.length == 0;
  }
}

class Graph {
  constructor (n) {
    this.noVertices = n;
    this.adjList = new Map ();
  }
  addVertex (v) {
    this.adjList.set (v, []);
  }
  addEdge (v, w) {
    this.adjList.get (v).push (w);
    this.adjList.get (w).push (v);
  }
  // function to performs BFS
  bfs (startingNode) {
    // create a visited array
    var visited = [];
    for (var i = 0; i < this.noOfVertices; i++)
      visited[i] = false;

    // Create an object for queue
    var q = new Queue ();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue (startingNode);

    // loop until queue is element
    while (!q.isEmpty ()) {
      // get the element from the queue
      var getQueueElement = q.dequeue ();

      // passing the current vertex to callback funtion
      console.log (getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.adjList.get (getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue (neigh);
        }
      }
    }
  }
  dfs(startingNode){
    var visited = [];
    for (let i =0;i < this.noVertices;i++){
      visited[i] = false;
    }
  this.DFSUtil(startingNode,visited);
  }
  DFSUtil(vert,visited){
    visited[vert] = true;
    console.log(vert);

    let get_neighbours = this.adjList.get(vert);

    for(let i in get_neighbours){
      let get_elem = get_neighbours[i];
      if(!visited[get_elem]) this.DFSUtil(get_elem,visited)
    }
  }
}

let myGraph = new Graph(10);

for (let i=0;i<12;i++){
  myGraph.addVertex(i);
}

myGraph.addEdge(5,7);
myGraph.addEdge(5,4);
myGraph.addEdge(2,4);
myGraph.addEdge(2,3);
myGraph.addEdge(7,6);
myGraph.addEdge(7,8);
myGraph.addEdge(9,8);
myGraph.addEdge(9,11);
myGraph.addEdge(10,11);

myGraph.bfs(5);
myGraph.dfs(5);
