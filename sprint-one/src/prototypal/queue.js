var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
	size: function() {
     maxVal = findMaxVal(this.storage);
     return maxVal;
  },
  
  enqueue : function(value) { 
    let maxVal = findMaxVal(this.storage);
    this.storage[maxVal+1] = value;
    return (maxVal+1);
  },

  dequeue : function() {
    let maxVal = findMaxVal(this.storage);
    let dequeueReturn = this.storage["1"];
    delete this.storage["1"];
    for(let currKey in this.storage) {
      this.storage[Number(currKey)-1] = this.storage[currKey];
    }
    delete this.storage[maxVal];
    return dequeueReturn;
  }
};


