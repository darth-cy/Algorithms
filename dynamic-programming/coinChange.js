if(typeof Dynamic == 'undefined'){
  Dynamic = {};
}

Dynamic.coinChange = function(target, changes){
  var coinChain = Array.apply(null, Array(target + 1)).map(x => false);
  coinChain[0] = []; // One way to get to 0

  for(var i = 0; i < coinChain.length; i++){
    var currentLevel = coinChain[i];
    if(!currentLevel){ continue; }

    for(var j = 0; j < changes.length; j++){
      var coin = changes[j];
      if(i + coin >= coinChain.length || coinChain[i + coin]){
        continue;
      }else{
        coinChain[i + coin] = coinChain[i].concat([coin]);
      }
    }
  }

  return coinChain.pop();
};

module.exports = Dynamic;
