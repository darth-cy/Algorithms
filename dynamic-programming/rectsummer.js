function RectSummer(matrix){
  this.matrix = matrix;
  this.dpMatrix = [];
  this.reCalculate();
}

RectSummer.prototype.reCalculate = function(){
  that = this;
  that.resetDp();
  for(var i = 0; i < that.matrix.length; i++){
    for(var j = 0; j < that.matrix[0].length; j++){
      that.dpMatrix[i + 1][j + 1] = that.dpMatrix[i + 1][j] + that.dpMatrix[i][j + 1] +
                                    that.matrix[i][j] - that.dpMatrix[i][j];
    }
  }
  return that.dpMatrix;
}

RectSummer.prototype.resetDp = function(){
  that = this;
  that.dpMatrix = Array.apply(null, Array(that.matrix.length + 1)).map(function(){
    return Array.apply(null, Array(that.matrix[0].length + 1)).map(function(){
      return 0;
    })
  })
}

RectSummer.prototype.loopup = function(x, y){
  that = this;
  return that.dpMatrix[x + 1][y + 1];
}


// matrix = [ [1, 2, 3],
//            [4, 5, 6]];
//
// var r = new RectSummer(matrix);
// console.log(r.loopup(1, 1));
