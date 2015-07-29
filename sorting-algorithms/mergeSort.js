(function(){
  if(typeof Sorting === 'undefined'){
    Sorting = {};
  }

  Sorting.mergeSort = function(arr, comparator){
    if(arr.length <= 1) { return arr; }

    if(typeof comparator != 'function'){
      var comparator = function(x, y){
        if(x > y){
          return 1;
        }else if(x < y){
          return -1;
        }else{
          return 0;
        }
      }
    }

    var midIndex = Math.floor(arr.length / 2);
    var left = arr.slice(0, midIndex);
    var right = arr.slice(midIndex);

    return Sorting.merge(Sorting.mergeSort(left, comparator),
                         Sorting.mergeSort(right, comparator),
                         comparator);


  }

  Sorting.merge = function(arr1, arr2, comparator){
    var result = [];

    while(arr1.length > 0 && arr2.length > 0){
      compare = comparator(arr1[0], arr2[0]);

      if(compare === 1){
        result.push(arr2[0]);
        arr2.splice(0, 1);
      }else{
        result.push(arr1[0]);
        arr1.splice(0, 1);
      }
    }

    return result.concat(arr1).concat(arr2);
  }
})();
