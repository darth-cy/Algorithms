if(typeof Search == "undefined"){
  Search = {};
};

Search.binarySearch = function(arr, el){
  if(arr.length < 2){ return arr[0] == el? 0 : -1; };

  var mid = Math.floor(arr.length / 2);
  if(arr[mid] == el){
    return mid;
  }else if(arr[mid] < el){
    var right = Search.binarySearch(arr.slice(mid + 1), el) + mid;
    return right >= 0? (right + mid) : -1;
  }else{
    return Search.binarySearch(arr.slice(0, mid), el);
  }

  return -1;
};

module.exports = Search;
