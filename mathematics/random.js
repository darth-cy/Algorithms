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

module.exports = Mathematics;
