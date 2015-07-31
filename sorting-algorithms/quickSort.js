(function(){
  if(typeof Sorting === "undefined"){
    Sorting = {};
  }

  Sorting.quickSort = function(arr, comparator){
      if(typeof comparator === "undefined"){
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

      if(arr.length < 2){ return arr; }

      var pivot = arr[0];
      var left = [];
      var right = [];

      for(var i = 1; i < arr.length; i++){
        compare = comparator(arr[i], pivot);
        if(compare === 1){
          right.push(arr[i]);
        }else{
          left.push(arr[i]);
        }
      }

      return Sorting.quickSort(left, comparator)
                    .concat(pivot)
                    .concat(Sorting.quickSort(right, comparator));
    }
})();
