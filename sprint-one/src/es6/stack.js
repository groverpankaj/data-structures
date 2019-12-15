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


class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }

  size() {
  	let maxVal = findMaxVal(this.storage);
		return maxVal;
  }

  push(value) { 
    let maxVal = findMaxVal(this.storage);
    this.storage[maxVal+1] = value;
    return (maxVal+1);
  }

  pop() {
    let maxVal = findMaxVal(this.storage);
    let popReturn = this.storage[maxVal];
    delete this.storage[maxVal];
    return popReturn;
  }

}