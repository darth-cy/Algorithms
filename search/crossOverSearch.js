if(typeof Search == 'undefined'){
  Search = {};
}

Search.crossOverSearch = function(arr, low, high, target){
  if(arr[high] <= target){
    return high;
  }else if(arr[low] > target){
    return low;
  }

  var mid = Math.floor((low + high)/2);

  if(arr[mid] <= target && arr[mid + 1] > target){
    return mid;
  }

  if(arr[mid] < target){
    return Search.crossOverSearch(arr, mid+1, high, target);
  }else{
    return Search.crossOverSearch(arr, low, mid - 1, target);
  }
};

module.exports = Search;
