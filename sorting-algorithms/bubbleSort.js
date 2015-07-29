(function(){
  if(typeof Sorting === 'undefined'){
    Sorting = {};
  }

  Sorting.bubbleSort = function(arr, comparator){
    if(typeof comparator != 'function'){
      comparator = function(x, y){
        if(x > y){
          return 1;
        }else if(x < y){
          return -1;
        }else{
          return 0;
        }
      }
    }

    var unsorted = true;
    while(unsorted){
      unsorted = false;

      for(var i = 0; i < arr.length - 1; i++){
        compare = comparator(arr[i], arr[i + 1]);
        if(compare === 1){
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          unsorted = true;
        }
      }
    }

    return arr;
  }
})();
