if(typeof Sorting == 'undefined'){
  Sorting = {};
};

Sorting.insertionSort = function(arr){
  for(var i = 1; i < arr.length; i++){
    var key = arr[i];
    var j = i - 1;

    while(j >= 0 && arr[j] > key){
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = key;
  }

  return arr;
};

module.exports = Sorting;
