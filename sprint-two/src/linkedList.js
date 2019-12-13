var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Input: value of the new Node to be added

    // Create a new Node and assign to a variable
    var newNode = Node(value);

    // assign the tail to tailNode
    var tailNode = this.tail;

    // if tailNode === null'
    if (tailNode === null) {
      //    list.head = newNode
      this.head = newNode;

    } else {
    //    asign the current tail .next property to the new Node we created
      tailNode.next = newNode;
    }

    // set the Linked List tail property to new Node
    this.tail = newNode;

    // Output: Nothing
  };

  list.removeHead = function() {
    //Input: Nothing

    // Lookup for Head property of the Linked List
    var headNode = this.head;

    // If the Head property is null (Linked list is empty)
    if (headNode === null) {
      //return undefined
      return undefined;
    }

    // Assign the head.value to the `retValue` variable
    var retValue = headNode.value;

    // Assign LinkedList.head to the headNode.next pointer
    // if there is only one element and it is being removed, set head and tail pointers to null
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = headNode.next;
    }

    // Return the `retValue`
    return retValue;

    //Output: Value property of the removed Node
  };

  list.contains = function(target) {
    // Input: Value we need to search in .value of Node

    // Initialize the result variable to false
    var isPresent = false;

    // Lookup for Head property of the Linked List and assign it to currNode variable
    var currNode = this.head;

    // If the currNode is null (Linked list is empty) then return result
    if (currNode === null) {
      return isPresent;
    } else {
      // else start iteration

      // while currNode.next !== null
      while(currNode !== null) {
        //   if currNode.value = target
        if (currNode.value === target) {
          //     set result to true
          isPresent = true;
          //  return result
          return isPresent;
        }
        //   currNode = currNode.next
        currNode = currNode.next;
      }
    }
    // return result
    return isPresent;
    // Output: Boolean - True if found else False
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
