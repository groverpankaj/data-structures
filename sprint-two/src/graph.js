

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

  // if index variable is not -1
    // return use splice on nodeArr and store the val in the return variable

    // delete the property in the nodeEdges object with key as node
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeEdges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push the toNode value to the fromNode key array in nodeEdges
  this.nodeEdges[fromNode].push(toNode);
  // push the fromNode value to the toNode key array in nodeEdges
  this.nodeEdges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


