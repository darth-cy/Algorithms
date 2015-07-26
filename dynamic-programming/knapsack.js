function KnapsackSolver(arr){
  this.adders = arr;
  this.overlay = [];
}

KnapsackSolver.prototype.waysToObtain = function(target){
  this.overlay = Array.apply(null, Array(target + 1)).map(function(){
    return 0;
  })
  this.overlay[0] = 1;
  this.populateOverlay();
  return this.overlay[target];
}

KnapsackSolver.prototype.populateOverlay = function(){
  that = this;
  that.adders.forEach(function(adder){
    previousOverlay = that.overlay.slice();
    previousOverlay.forEach(function(count, index){
      if((count > 0) && (index + adder <= previousOverlay.length - 1)){
        that.overlay[index + adder] += count;
      }
    })
  })
}

module.exports = knapsackSolver();

















//
