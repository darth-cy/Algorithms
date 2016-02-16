if(typeof Search == 'undefined'){
  Search = {};
}

function hashify(arr){
  var result = {};

  for(var i = 0; i< arr.length; i++){
    var el = arr[i];
    if(!result[el]){
      result[el] = 1;
    }else{
      result[el] += 1;
    }
  }

  return result;
}

Search.threeCommon = function(arr1, arr2, arr3){
  arr1 = hashify(arr1);
  arr2 = hashify(arr2);
  arr3 = hashify(arr3);

  var result = [];

  for(var key in arr1){
    if(arr2[key] && arr3[key]){
      var count = Math.min(arr1[key], arr2[key], arr3[key]);
      for(var i = 0; i < count; i++){
        result.push(key);
      }
    }
  }

  return result;
}

module.exports = Search;
