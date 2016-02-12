if(typeof Search == "undefined"){
  Search = {};
};

Search.binarySearch = function(arr, el){
  if(arr.length < 2){ return arr[0] == el? 0 : -1; };

  var mid = Math.floor(arr.length / 2);
  if(arr[mid] == el){
    return mid;
  }else{
    var left = Search.binarySearch(arr.slice(0, mid), el);
    if(left >= 0){ return left; };

    var right = Search.binarySearch(arr.slice(mid + 1), el);
    if(right >= 0){ return right + mid; };
  }

  return -1;
};

module.exports = Search;
