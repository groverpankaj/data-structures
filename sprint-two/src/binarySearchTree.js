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
    // check if this.value is equal to the target
    if (this.value === value) {
      // if yes return true
      return true;
    }
    // if this.value is > target
    if (this.value > value) {
      // if this.left is null
      if (this.left === null) {
        // return false
        return false;
      } else {
        // else call this.left.contains(value)
        return this.left.contains(value);
      }
    } else {
      // else
      // if this.right is null
      if (this.right === null) {
        // return false
        return false;
      } else {
        // else call this.right.contains(value)
        return this.right.contains(value);
      }
    }
    // return false
    return false;
  },

  depthFirstLog: function(callback) {
    // execute the callback on this.value
    callback(this.value);
    // if this.left is ! null
    if (this.left !== null) {
      // recursively call this.left.depthFirstLog
      this.left.depthFirstLog(callback);
    }
    // if this.right is ! null
    if (this.right !== null) {
      // recursively call this.right.depthFirstLog
      this.right.depthFirstLog(callback);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert
  Best case O(h) where h is max height and O(n) in worst case
  
  contains

  depthFirstLog
 */
