var BinarySearchTree = function(value) {
  // create new object
  var bsTreeNode = {};
  // assign property value to value
  bsTreeNode.value = value;
  // assign property left to null
  bsTreeNode.left = null;
  // assign property right to null
  bsTreeNode.right = null;
  // extend the methods obj to the new object
  _.extend(bsTreeNode, bstTreeMethod);
  // return the object
  return bsTreeNode;
};

var bstTreeMethod = {

  insert: function(value) {
    // check if insert value is less than this.value
    if (this.value > value) {
      // if it is, check if this.left is null
      if (this.left === null) {
        // if it is null, assign this.left to a new BST with the value
        this.left = BinarySearchTree(value);
        // else recursively call insert on this.left
      } else {
        this.left.insert(value);
      }
    } else {
      // else check if this.right is null
      if (this.right === null) {
        // if it is null, assign this.right to a new BST with the value
        this.right = BinarySearchTree(value);
        // else recursively call insert on this.right
      } else {
        this.right.insert(value);
      }
    }
  },

  contains: function(value) {

  },

  depthFirstLog: function(callback) {

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
