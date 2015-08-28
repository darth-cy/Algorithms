(function(){
  if(typeof Recursion === "undefined"){
    window.Recursion = {};
  }

  var makeChange = Recursion.makeChange = function(target, denominations){
    if(target === 0 || denominations.length === 0){ return []; }

    var firstCoin = denominations[0];
    var secondCoin = denominations[1];

    if(target >= firstCoin){
      if(secondCoin === undefined){
        return makeChange(target - firstCoin, denominations).concat(firstCoin);
      }else{
        var firstTry = makeChange(target - firstCoin, denominations).concat(firstCoin);
        var secondTry = makeChange(target- secondCoin, denominations).concat(secondCoin);

        if(firstTry.length > secondTry.length){
          return secondTry;
        }else{
          return firstTry;
        }
      }
    }else{
      // The biggest denomination doesn't fit, so slice if off and try again.
      return makeChange(target, denominations.slice(1));
    }
  }

  console.log(makeChange(28, [11, 7, 3, 1]));
})();
