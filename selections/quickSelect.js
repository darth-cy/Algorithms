if(typeof Selection == 'undefined'){
  Selection = {};
}

// Select the kth biggest element
var quickSelectMax = function(arr, k){
  if(k == 1 && arr.length < 2){
    return arr[0];
  }

  var pivot = arr[0];
  var pivotCount = 0;

  var left = [];
  var right = [];

  for(var i = 0; i< arr.length; i++){
    if(arr[i] > pivot){
      left.push(arr[i]);
    }else if(arr[i] < pivot){
      right.push(arr[i]);
    }else{
      pivotCount += 1;
    }
  }

  if(k > left.length && k <= left.length + pivotCount){
    return pivot;
  }else if(k > left.length + pivotCount){
    return quickSelectMax(right, k - left.length - pivotCount);
  }else{
    return quickSelectMax(left, k);
  }
};

// Select the kth smallest element
var quickSelectMin = function(arr, k){
  if(arr.length < 2 && k == 1){
    return arr[0];
  }

  var pivot = arr[0];
  var pivotCount = 0;

  var left = [];
  var right = [];

  for(var i = 0; i< arr.length; i++){
    var num = arr[i];
    if(num > pivot){
      right.push(num);
    }else if(num < pivot){
      left.push(num);
    }else{
      pivotCount += 1;
    }
  }

  if(k > left.length && k <= left.length + pivotCount){
    return pivot;
  }else if(k < left.length){
    return quickSelectMin(left, k);
  }else{
    return quickSelectMin(right, k - left.length - pivotCount);
  }
};

Selection.quickSelectMax = quickSelectMax;
Selection.quickSelectMin = quickSelectMin;
module.exports = Selection;
