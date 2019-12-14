

// Instantiate a new graph
var Graph = function() {
  this.nodeArr = [];
  this.nodeEdges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeArr.push(node);
  this.nodeEdges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeArr.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Find the index of node in nodeArr and store it in a variable
  var nodePos = this.nodeArr.indexOf(node);
  // if index variable is not -1
  if (nodePos > -1) {

    // use splice on nodeArr with the index
    this.nodeArr.splice(nodePos, 1);
    // lookup this.nodeEdges with the node as key and store the array in the variable
    var edges = this.nodeEdges[node];

    // use a for loop to iterate over the array
    for (let i = 0; i < edges.length; i++) {
      // call .removeEdge on node and current element of iteration
      this.removeEdge(node, edges[i]);
    }
    // delete the property in the nodeEdges object with key as node
    delete this.nodeEdges[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeEdges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if both nodes exist in nodeArray
  if (this.nodeArr.includes(fromNode) && this.nodeArr.includes(toNode)) {
    // push the toNode value to the fromNode key array in nodeEdges
    this.nodeEdges[fromNode].push(toNode);
    // push the fromNode value to the toNode key array in nodeEdges
    this.nodeEdges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // use fromNode as a key to lookup the array of edges in nodeEdges
  // find the index of toNode in the array of edges
  var toIndex = this.nodeEdges[fromNode].indexOf(toNode);


  // use splice to remove the index of toNode in the array
  if (toIndex > -1) {
    this.nodeEdges[fromNode].splice(toIndex, 1);
  }

  // use toNode as a key to lookup the array of edges in nodeEdges
  // find the index of fromNode in the array of edges
  var fromIndex = this.nodeEdges[toNode].indexOf(fromNode);
  // use splice to remove the index of fromNode in the array
  if (fromIndex > -1) {
    this.nodeEdges[toNode].splice(fromIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over the nodeArr and pass each value to the callback function
  _.each(this.nodeArr, function(value) {
    cb(value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?

 addNode
 O(1) (constant time)
 assumes js arrays have constant time for push

 contains
 O(n) (linear time)

 removeNode
 O(n) (linear time)

 hasEdge
 O(n) (linear time)

 addEdge
 O(1) (constant time)

 removeEdge
 O(n) (linear time)

 forEachNode
 O(n) (linear time)
 */


