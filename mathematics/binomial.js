var fs = require("../utilities/factorialStore");

if(typeof Mathematics == 'undefined'){
  Mathematics = {};
};

Mathematics.binomialCoefficient = function(n, k){
  if(!n || !k){ return 0; };
  return fs.get(n) / (fs.get(k) * fs.get(n - k));
};

module.exports = Mathematics;
