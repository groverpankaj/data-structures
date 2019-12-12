var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // var storage = {1: a, 2: b};
    var storage ={};

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


  // Implement the methods below
  someInstance.push = function(value) { 
    let maxVal = findMaxVal(storage);
    storage[maxVal+1] = value;
    return (maxVal+1);
  };

  someInstance.pop = function() {
    let maxVal = findMaxVal(storage);
    let popReturn = storage[maxVal];
    delete storage[maxVal];
    return popReturn;
  };

  someInstance.size = function() {
    let maxVal = findMaxVal(storage);
    return maxVal;
  };

  return someInstance;
};

