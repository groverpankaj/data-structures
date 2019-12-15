class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  size() {
  	let maxVal = findMaxVal(this.storage);
		return maxVal;
  }

  enqueue(value) { 
    let maxVal = findMaxVal(this.storage);
    this.storage[maxVal+1] = value;
    return (maxVal+1);
  }

  dequeue() {
    let maxVal = findMaxVal(this.storage);
    let dequeueReturn = this.storage["1"];
    delete this.storage["1"];
    for(let currKey in this.storage) {
      this.storage[Number(currKey)-1] = this.storage[currKey];
    }
    delete this.storage[maxVal];
    return dequeueReturn;
  }

}
