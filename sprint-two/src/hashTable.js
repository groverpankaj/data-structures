

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // Make a key value array
  var keyVal = [k, v];

  // Get the hash key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // store the bucket in the variable
  var bucket = this._storage.get(index);
  // if bucket is undefined then use set method to store an empty array in the index
  if (bucket === undefined) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }

  // assign isDuplicate to false (default value)
  var isDuplicate = false;

  //iterate over the bucket array
  for (let i = 0; i < bucket.length; i++) {
    var current = bucket[i];
    // check each pair for key value and if it is equal to k (Duplicate key)
    if (current[0] === k) {
      // if true then overwrite the key, value pair
      bucket[i] = keyVal;

      // set isDuplicate to true and break
      isDuplicate = true;
      break;
    }
  }
  // if isDuplicate is false then push Key Value pair to Bucket
  if (!isDuplicate) {
    bucket.push(keyVal);
  }
};

HashTable.prototype.retrieve = function(k) {
  // convert key to hash index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket at the index
  var bucket = this._storage.get(index);
  // if bucket is not undefined
  if (bucket !== undefined) {
    // iterate over bucket array and assign the elem to a variable
    for (var i = 0; i < bucket.length; i++) {
      var keyVal = bucket[i];
      // check if the elem's key matches k
      if (keyVal[0] === k) {
        // return elem's value if yes
        return keyVal[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  // convert key to hash index
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket at the index
  var bucket = this._storage.get(index);
  // if bucket is not undefined
  if (bucket !== undefined) {
    // iterate over bucket and store elem
    for (var i = 0; i < bucket.length; i++) {
      var keyVal = bucket[i];
      // if elem's key === k
      if (keyVal[0] === k) {
        // splice bucket at i
        bucket.splice(i, 1);
        break;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


