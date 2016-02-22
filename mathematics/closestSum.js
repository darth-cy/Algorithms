if(typeof Mathematics == 'undefined'){
  Mathematics = {};
}

Mathematics.closestSum = function(arr1, arr2, target){
  var leftIdx = 0;
  var rightIdx = arr2.length - 1;
  var currentDiff = Number.MAX_SAFE_INTEGER;
  var currentResult = [];

  while(leftIdx < arr1.length - 1 && rightIdx >= 0){
    var leftElement = arr1[leftIdx];
    var rightElement = arr2[rightIdx];

    if(leftElement + rightElement - target < currentDiff){
      currentDiff = leftElement + rightElement - target;
      currentResult = [leftElement, rightElement];
    }else if(leftElement + rightElement < target){
      leftIdx += 1;
    }else{
      rightIdx -= 1;
    }
  }

  return currentResult;
};

module.exports = Mathematics;
