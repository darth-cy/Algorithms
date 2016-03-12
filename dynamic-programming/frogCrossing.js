if(typeof Dynamic == 'undefined'){
  Dynamic = {};
}

function isPositive(num){
  return num >= 0;
}

Array.prototype.last = function(){
  return this[this.length - 1];
}

Dynamic.frogCrossing = function(n, stoneArr){
  // register the stones
  var stoneStore = {};
  for(var i = 0; i<stoneArr.length; i++){
    stoneStore[stoneArr[i]] = true;
  }

  // dynamic programming
  var dynamicStrip = Array.apply(0, Array(n + 1)).map(x => undefined);
  dynamicStrip[0] = 0;

  var oneStepMore;
  var oneStepLess;

  // range checker
  var inRange = function(pos){
    return pos < dynamicStrip.length && pos >= 0;
  };

  var target = dynamicStrip.length - 1;
  for(var j = 0; j < dynamicStrip.length; j++){
    var lastStep = dynamicStrip[j];
    if(lastStep == undefined){ continue; }

    var oneStepMore = lastStep + 1 + j;
    var sameStep = lastStep + j;
    var oneStepLess = lastStep - 1 + j;

    if(oneStepMore >= target || oneStepLess >= target || sameStep >= target){
      return true;
    }
    if(inRange(oneStepMore) && dynamicStrip[oneStepMore] == undefined && stoneStore[oneStepMore]){
      dynamicStrip[oneStepMore] = oneStepMore - j;
    }
    if(inRange(sameStep) && dynamicStrip[sameStep] == undefined && stoneStore[sameStep]){
      dynamicStrip[sameStep] = sameStep - j;
    }
    if(inRange(oneStepLess) && dynamicStrip[oneStepLess] == undefined && stoneStore[oneStepLess]){
      dynamicStrip[oneStepLess] = oneStepLess - j;
    }
  }

  // check last position
  return false;
}

module.exports = Dynamic;
