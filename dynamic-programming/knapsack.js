(function(){
  if(typeof Dynamic === "undefined"){
    Dynamic = {};
  }

  var KnapsackSolver = Dynamic.KnapsackSolver = function(arr){
    this.adders = arr;
    this.overlay = [];
  }

  KnapsackSolver.prototype.waysToObtain = function(target){
    var thisSolver = this;
    thisSolver.overlay = Array.apply(null, Array(target + 1)).map(function(){
      return 0;
    })
    thisSolver.overlay[0] = 1;
    thisSolver.populateOverlay();
    return thisSolver.overlay[target];
  }

  KnapsackSolver.prototype.populateOverlay = function(){
    var thisSolver = this;
    thisSolver.adders.forEach(function(adder){
      previousOverlay = thisSolver.overlay.slice();
      previousOverlay.forEach(function(count, index){
        if((count > 0) && (index + adder <= previousOverlay.length - 1)){
          thisSolver.overlay[index + adder] += count;
        }
      })
    })
  }
})();


















//
