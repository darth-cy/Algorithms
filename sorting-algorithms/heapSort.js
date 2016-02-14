var Heap = require('../data-structures/heap').Heap;

if(typeof Sorting == 'undefined'){
  Sorting = {};
}

Sorting.heapSort = function(arr){
  const heap = new Heap([], {
    isMinHeap: true
  });

  arr.forEach(function(el){
    heap.append(el);
  });

  var result = [];
  while(heap.size() > 0){
    result.push(heap.get());
  }

  return result;
}

module.exports = Sorting;
