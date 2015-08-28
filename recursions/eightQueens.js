(function(){
  if(typeof Recursion === undefined){
    window.Recursion = {};
  }

  QueenSolver = Recursion.QueenSolver = function(gridLength, numQueens){
    this.currentPlacing = 0;
    this.gridLength = gridLength;
    this.numQueens = numQueens;
    this.rows = Array.apply(null, Array(this.gridLength)).map(function(){
      return Array.apply(null, Array(this.gridLength)).map(function(){
            return "_";
      })
    })

    this.allCoords = [];

    this.fillCoords();
  };

  QueenSolve.fillCoords = function(){
    for(var i = 0; i < this.gridLength; i++){
      for(var j = 0; j < this.gridLength; j++){
        this.allCoords.push([i, j]);
      }
    }

    return 0;
  };

  QueenSolve.render = function(){
    this.rows.forEach(function(row){
      printRow = [];
      row.forEach(function(space){
        printRow.push(space);
      })
      console.log(printRow.join)
    })

    return 0;
  };

  QueenSolver.allUnavailable = function(){
    grossUnavailable = this.allUnavailableDiags().concat(this.unavailableRows()).concat(this.unavailableCols());
    return CoordinateUniq(grossUnavailable);
  };

  CoordinateUniq = function(cordinates){
    var result = [];
    cordinates.forEach(function(coordinate){
      result.forEach(function(other){
        if(other[0] !== coordinate[0] || other[1] !== coordinate[1]){
          result.push(coordinate);
        }
      })
    })
    return result;
  };

  QueenSolve.available = function(){
    var diff = this.allCoords.filter(function(coord){
      return this.allUnavailable().indexOf(coord) < 0
    });
    return diff;
  };

  QueenSolve.placeQueen = function(){
    var availables = this.available();
    if(availables.length < 1){ return false; }

    this.currentPlacing += 1;

    if(this.currentPlacing == this.numQueens){
      spot = availables[0];
      this.rows[spot[0]][spot[1]] = "Q"
      return true
    }

    availables.forEach(function(coord){
      this.rows[coord[0]][coord[1]] = "Q"
      if(!this.placeQueen()){
        this.rows[coord[0]][coord[1]] = "_"
        return 0;
      }else{
        return true
      }
    })
  };

  QueenSolve.checkRow = function(rowNum){
    return this.rows[rowNum].indexOf("Q") !== -1;
  };

  QueenSolve.unavailableRows = function(){
    var unavailableCoords = [];
    for(var rowIdx = 0; rowIdx < this.gridLength; rowIdx++){
      if(this.checkRow(rowIdx)){
        for(var colIdx = 0; colIdx < this.gridLength; colIdx++){
          unavailableCoords.push(rowIdx, colIdx);
        }
      }
    }
    return CoordinateUniq(unavailableCoords);
  };

  QueenSolve.checkCol = function(colNum){
    for(var rowIdx = 0; rowIdx < this.gridLength; rowIdx++){
      if(this.rows[rowIdx][colNum] === "Q"){
        return true;
      }
    }
    return false;
  };

  QueenSolve.unavailableCols = function(){
    var unavailableCoords = [];
    for(var colIdx = 0; colIdx < this.gridLength; colIdx++){
      if(this.checkCol(colIdx)){
        for(var rowIdx = 0; rowIdx < this.gridLength; rowIdx++){
          unavailableCoords.push(rowIdx, colIdx);
        }
      }
    }
    return CoordinateUniq(unavailableCoords);
  };

  QueenSolve.upRight = function(row, col){
    var diag = [];
    while((row - 1) > 0 && (col + 1) < this.gridLength){
      diag.push([row -= 1, col += 1]);
    }
    return diag;
  };

  QueenSolve.upLeft = function(row, col){
    var diag = [];
    while((row - 1) > 0 && (col - 1) > 0){
      diag.push([row -= 1, col -= 1]);
    }
    return diag;
  };

  QueenSolve.downLeft = function(row, col){
    var diag = [];
    while((row + 1) < this.gridLength && (col - 1) > 0){
      diag.push([row += 1, col -= 1]);
    }
    return diag;
  };

  QueenSolve.downRight = function(row, col){
    var diag = [];
    while((row + 1 < this.gridLength && (col + 1) < this.gridLength){
      diag.push([row += 1, col += 1]);
    }
    return diag;
  };

  QueenSolve.allUnavailableDiags = function(){
    var queenCoords = this.findAllQueens();
    var allDiags = [];

    queenCoords.forEach(function(coord){
      allDiags = allDiags.concat(this.unavailableDiags(coord[0], coord[1]));
    })

    return CoordinateUniq(allDiags);
  };

  QueenSolve.findAllQueens = function(){
    var queenCoords = [];
    this.allCoords.forEach(function(coord){
      if(this.rows[coord[0]][coord[1]] === "Q"){
        queenCoords.push(coord);
      }
    })
    return queenCoords;
  };

  QueenSolve.unavailableDiags = function(row, col){
    var unavailables = this.upRight(row, col).concat(this.downRight(row, col)).concat(this.downLeft(row, col)).concat(this.upLeft(row, col));
  };
})();
