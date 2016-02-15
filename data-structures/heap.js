if(typeof DataStructure == 'undefined'){
  DataStructure = {};
}

var Heap = function(arr, options){
  if(!arr){ arr = []; }
  if(!options){ options = {}; }

  this._arr = arr;
  this.maxSize = options.maxSize;
  this.isMinHeap = options.isMinHeap;

  for(var i = 0; i < this._arr.length; i++){
    if(this.isMinHeap){
      this.minHeapify(this._arr.length - i - 1);
    }else{
      this.maxHeapify(this._arr.length - i - 1);
    }
  }
};

Heap.prototype.inRange = function(idx){
  return (idx < this._arr.length) && (!this.maxSize || idx < this.maxSize) && (idx >= 0);
};

Heap.prototype.valueAt = function(idx){
  if(typeof this._arr[idx] !== "number"){
    return this._arr[idx].value();
  }

  return this._arr[idx];
};

Heap.prototype.swapValues = function(idxA, idxB){
  var temp = this._arr[idxA];
  this._arr[idxA] = this._arr[idxB];
  this._arr[idxB] = temp;
};

Heap.prototype.maxHeapify = function(idx){
  const left = idx * 2 + 1;
  const right = idx * 2 + 2;
  var largest = idx;

  if(this.inRange(left) && this.valueAt(left) > this.valueAt(largest)){
    largest = left;
  }

  if(this.inRange(right) && this.valueAt(right) > this.valueAt(largest)){
    largest = right;
  }

  if(largest !== idx){
    this.swapValues(idx, largest);
    this.maxHeapify(largest);
  }
};

Heap.prototype.minHeapify = function(idx){
  const left = idx * 2 + 1;
  const right = idx * 2 + 2;
  var smallest = idx;

  if(this.inRange(left) && this.valueAt(left) < this.valueAt(smallest)){
    smallest = left;
  }

  if(this.inRange(right) && this.valueAt(right) < this.valueAt(smallest)){
    smallest = right;
  }

  if(smallest !== idx){
    this.swapValues(idx, smallest);
    this.minHeapify(smallest);
  }
};

Heap.prototype.get = function(){
  const result = this._arr[0];

  this.swapValues(0, this._arr.length - 1);
  this._arr.pop();

  if(this.isMinHeap){
    this.minHeapify(0);
  }else{
    this.maxHeapify(0);
  }

  return result;
};

Heap.prototype.size = function(){
  return this._arr.length;
};

Heap.prototype.append = function(el){
  this._arr.push(el);
  if(this.isMinHeap){
    this.minBubbleUp(this._arr.length - 1);
  }else{
    this.maxBubbleUp(this._arr.length - 1);
  }

  if(this.maxSize){
    this._arr = this._arr.slice(0, maxSize);
  }

  return 0;
};

Heap.prototype.minBubbleUp = function(idx){
  const parent = idx % 2 == 0 ? (idx - 2)/2 : (idx - 1)/2;

  if(this.inRange(parent) && this.valueAt(parent) > this.valueAt(idx)){
    this.swapValues(parent, idx);
    this.minBubbleUp(parent);
    return 1;
  }

  return 0;
};

Heap.prototype.maxBubbleUp = function(idx){
  const parent = idx % 2 == 0 ? (idx - 2)/2 : (idx - 1)/2;

  if(this.inRange(parent) && this.valueAt(parent) < this.valueAt(idx)){
    this.swapValues(parent, idx);
    this.maxBubbleUp(parent);
    return 1;
  }

  return 0;
};

DataStructure.Heap = Heap;
module.exports = DataStructure;
