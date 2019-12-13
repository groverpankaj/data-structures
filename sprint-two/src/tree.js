var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree with value provided and store it in newTree variable
  var newTree = Tree(value);
  // push the newTree to this.children array
  this.children.push(newTree);
};

treeMethods.contains = function(target) {

  // if this.value matches the target return true
  if (this.value === target) {
    return true;
  }
  // use a for loop to iterate over this.children
  for (let i = 0; i < this.children.length; i++) {
    // call .contains on each child object
    let child = this.children[i];
    // if the result of the above call is true then return true
    if (child.contains(target)) {
      return true;
    }
  }
  // when we come out of the for in loop return false as default
  return false;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
