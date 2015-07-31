(function(){
  if(typeof Dynamic === "undefined"){
    Dynamic = {};
  }

  var RectSummer = Dynamic.RectSummer = function(matrix){
    this.matrix = matrix;
    this.dpMatrix = [];
    this.reCalculate();
  }

  RectSummer.prototype.reCalculate = function(){
    var thisSummer = this;
    thisSummer.resetDp();
    for(var i = 0; i < thisSummer.matrix.length; i++){
      for(var j = 0; j < thisSummer.matrix[0].length; j++){
        thisSummer.dpMatrix[i + 1][j + 1] = thisSummer.dpMatrix[i + 1][j] + thisSummer.dpMatrix[i][j + 1] +
                                      thisSummer.matrix[i][j] - thisSummer.dpMatrix[i][j];
      }
    }
    return thisSummer.dpMatrix;
  }

  RectSummer.prototype.resetDp = function(){
    var thisSummer = this;
    thisSummer.dpMatrix = Array.apply(null, Array(thisSummer.matrix.length + 1)).map(function(){
      return Array.apply(null, Array(thisSummer.matrix[0].length + 1)).map(function(){
        return 0;
      })
    })
  }

  RectSummer.prototype.loopup = function(x, y){
    var thisSummer = this;
    return thisSummer.dpMatrix[x + 1][y + 1];
  }

  // matrix = [ [1, 2, 3],
  //            [4, 5, 6]];
  //
  // var r = new RectSummer(matrix);
  // console.log(r.loopup(1, 1));
})();
