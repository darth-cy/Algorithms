if(typeof Mathematics == 'undefined'){
  Mathematics = {};
}

Mathematics.largestContiguousSum = function(arr){
  var currentSum = 0;
  var largest = 0;

  arr.forEach(function(el){
    if(currentSum + el < 0){
      largest = currentSum > largest ? currentSum : largest;
      currentSum = 0;
    }else{
      currentSum += el;
    }
  })

  return Math.max(currentSum, largest);
}

module.exports = Mathematics;
