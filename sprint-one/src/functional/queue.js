var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // Helper function Max Value
   const findMaxVal = function(input) {
    let allKeys = Object.keys(input);

    let maxVal = 0;

    if(allKeys.length > 0) {
      let allKeysNum = allKeys.map(function(ele) {
        return Number(ele);
      });
      maxVal = Math.max.apply(Math, allKeysNum);
    }

    return maxVal;
   }  

  someInstance.enqueue = function(value) {
    let maxVal = findMaxVal(storage);
    storage[maxVal+1] = value;
    return (maxVal+1);
  };

  someInstance.dequeue = function() {
    let maxVal = findMaxVal(storage);
    
    let returnVal;
    if (maxVal > 0) {
      returnVal = storage["1"];
      delete storage["1"]
      for(currKey in storage) {
        let currKeyNum = Number(currKey);
        storage[currKeyNum-1] = storage[currKey];
      }
      delete storage[maxVal];
    };

    return returnVal;
  };

  someInstance.size = function() {
    let maxVal = findMaxVal(storage);
    return maxVal;
  };

  return someInstance;
};
