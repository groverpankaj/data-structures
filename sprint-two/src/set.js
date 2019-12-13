
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// Takes any string and adds it to the Set
setPrototype.add = function(item) {
  // check if the item is a string
  if (typeof(item) === 'string') {
    // if item has index of === -1 (not found)
    if (this._storage.indexOf(item) === -1) {
      // push the item into _storage array
      this._storage.push(item);
    }
  }
};

// Takes any string and returns a boolean reflecting whether or not it is present
setPrototype.contains = function(item) {
  // if item has index of > -1 in _storage array
  if (this._storage.indexOf(item) > -1) {
    // return true
    return true;
  } else {
  // else return false
    return false;
  }
};

// Takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  // store the value of the indexof item in posItem variable
  var posItem = this._storage.indexOf(item);
  // if posItem > -1 then
  if (posItem > -1) {
    // splice the _storage array with argument of posItem
    this._storage.splice(posItem, 1);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
