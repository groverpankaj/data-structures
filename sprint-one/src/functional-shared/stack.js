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
 };


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var someInstance = {};

   someInstance.storage = {};

   _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
	size : function() {
		let maxVal = findMaxVal(this.storage);
		return maxVal;
	},

	push : function(value) { 
    let maxVal = findMaxVal(this.storage);
    this.storage[maxVal+1] = value;
    return (maxVal+1);
  },

  pop : function() {
    let maxVal = findMaxVal(this.storage);
    let popReturn = this.storage[maxVal];
    delete this.storage[maxVal];
    return popReturn;
  }

};



