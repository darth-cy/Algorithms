if(typeof Other == "undefined"){
  var Other = {};
}

var factorialTrailingZero = function(n){
  var count = 0;

  while(n > 0){
    n /= 5;
    count += n;
  }

  return count;
}

var pascalTriangle = function(n){
  var result = Array.apply(0, Array(n)).map((x, i) => Array.apply(0, Array(i + 1)));

  for(var i = 0; i < result.length; i++){
    var row = result[i];

    row[0] = 1;
    row[row.length - 1] = 1;

    for(var j = 1; j < row.length - 1; j++){
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }

  return result;
}

Other.factorialTrailingZero = factorialTrailingZero;
Other.pascalTriangle = pascalTriangle;
module.exports = Other;
