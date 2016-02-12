if(typeof Mathematics == "undefined"){
  Mathematics = {};
};

// Random number generator from 0 to 9
Mathematics.random10 = function(){
  var cumulative = Math.random();

  for(var i = 1; i <= 10; i++){
    if(i * 0.1 > cumulative){
      return i - 1;
    };
  };
};

// Random number generator from 0 to n
Mathematics.randomInRange = function(n){
  var cumulative = Math.random();
  var weight = 1 / n;

  for(var i = 1; i <= n; i++){
    if(i * weight > cumulative){
      return i - 1;
    };
  };
};

function cumulatize(arr){
  for(var i = 1; i< arr.length; i++){
    arr[i] = arr[i - 1] + arr[i];
  };

  return arr;
}

// Random number generator with elements and weights
Mathematics.randomWeighted = function(elements, weights){
  var cumulativeCount = cumulatize(weights);
  var weightSum = cumulativeCount[cumulativeCount.length - 1];

  var cumulative = Math.random();
  var weight = 1 / weightSum;

  for(var j = 0; j < weightSum; j++){
    if(cumulativeCount[j] * weight > cumulative){
      return elements[j];
    };
  };
};

Mathematics.scramble = function(arr){
  var temp;
  var swapIdx;

  for(var i = arr.length - 1; i > 0; i--){
    swapIdx = Mathematics.randomInRange(i);

    temp = arr[i];
    arr[i] = arr[swapIdx];
    arr[swapIdx] = temp;
  };

  return arr;
};

module.exports = Mathematics;
