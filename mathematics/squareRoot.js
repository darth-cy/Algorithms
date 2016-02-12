// Wite a function to find the square root

if(typeof Mathematics == "undefined"){
  Mathematics = {};
}

Mathematics.squareRoot = function(base, precision, round){
  if(!precision){ precision = 0.0001; };
  if(!round){ round = 4; };

  var xLast = base;
  var xNext = xLast - (xLast * xLast - base)/(2 * xLast);

  while(xLast - xNext > precision){
    xLast = xNext;
    xNext = xLast - (xLast * xLast - base)/(2 * xLast);
  }

  return Math.floor(xNext * Math.pow(10, round)) / Math.pow(10, round); // Rounding
}

module.exports = Mathematics;
