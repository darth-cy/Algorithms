(function(){
  if(typeof Recursion === "undefined"){
    Recursion = {};
  }

  QueenSolver = Recursion.QueenSolver = function(gridLength, numQueens){
    this.currentPlacing = 0;
    this.gridLength = gridLength;
    this.numQueens = numQueens;
    this.rows = Array.apply(null, Array(this.gridLength)).map(function(){
      return Array.apply(null, Array(this.gridLength)).map(function(){
        return "_";
      })
    }.bind(this))

    this.allCoords = [];

    for(var i = 0; i < this.gridLength; i++){
      for(var j = 0; j < this.gridLength; j++){
        this.allCoords.push([i, j]);
      }
    }
  };

  QueenSolver.prototype.render = function(){
    this.rows.forEach(function(row){
      printRow = [];
      row.forEach(function(space){
        printRow.push(space);
      })
      console.log(printRow.join())
    })

    return 0;
  };

  QueenSolver.prototype.allUnavailable = function(){
    var grossUnavailable = this.allUnavailableDiags().concat(this.unavailableRows()).concat(this.unavailableCols());
    return grossUnavailable;
  };

  CoordinateUniq = function(cordinates){
    return cordinates;
  };

  QueenSolver.prototype.available = function(){
    var allcoordstring = this.allCoords.map(function(coord){
      return coord.join("-");
    })

    var unavailablesstring = this.allUnavailable().map(function(coord){
      return coord.join("-");
    })

    var diff = allcoordstring.filter(function(coord){
      return unavailablesstring.indexOf(coord) < 0
    })

    diff = diff.map(function(string){
      string = string.split("-");
      string[0] = Number(string[0]);
      string[1] = Number(string[1]);

      return string;
    })

    return diff;
  };

  QueenSolver.prototype.placeQueen = function(){
    this.render();

    var availables = this.available();
    if(availables.length < 1){ return false; }

    this.currentPlacing += 1;

    if(this.currentPlacing == this.numQueens){
      spot = availables[0];
      this.rows[spot[0]][spot[1]] = "Q"
      return true
    }

    for(var idx = 0; idx < availables.length; idx++){
      coord = availables[idx];
      this.rows[coord[0]][coord[1]] = "Q"
      if(!this.placeQueen()){
        this.rows[coord[0]][coord[1]] = "_"
      }else{
        return true;
      }
    }
    return false;
  };

  QueenSolver.prototype.checkRow = function(rowNum){
    return this.rows[rowNum].indexOf("Q") !== -1;
  };

  QueenSolver.prototype.unavailableRows = function(){
    var unavailableCoords = [];
    for(var rowIdx = 0; rowIdx < this.gridLength; rowIdx++){
      if(this.checkRow(rowIdx)){
        for(var colIdx = 0; colIdx < this.gridLength; colIdx++){
          unavailableCoords.push([rowIdx, colIdx]);
        }
      }
    }
    return CoordinateUniq(unavailableCoords);
  };

  QueenSolver.prototype.checkCol = function(colNum){
    for(var rowIdx = 0; rowIdx < this.gridLength; rowIdx++){
      if(this.rows[rowIdx][colNum] === "Q"){
        return true;
      }
    }
    return false;
  };

  QueenSolver.prototype.unavailableCols = function(){
    var unavailableCoords = [];
    for(var colIdx = 0; colIdx < this.gridLength; colIdx++){
      if(this.checkCol(colIdx)){
        for(var rowIdx = 0; rowIdx < this.gridLength; rowIdx++){
          unavailableCoords.push([rowIdx, colIdx]);
        }
      }
    }
    return CoordinateUniq(unavailableCoords);
  };

  QueenSolver.prototype.upRight = function(row, col){
    var diag = [];
    while((row - 1) > 0 && (col + 1) < this.gridLength){
      diag.push([row -= 1, col += 1]);
    }
    return diag;
  };

  QueenSolver.prototype.upLeft = function(row, col){
    var diag = [];
    while((row - 1) > 0 && (col - 1) > 0){
      diag.push([row -= 1, col -= 1]);
    }
    return diag;
  };

  QueenSolver.prototype.downLeft = function(row, col){
    var diag = [];
    while((row + 1) < this.gridLength && (col - 1) > 0){
      diag.push([row += 1, col -= 1]);
    }
    return diag;
  };

  QueenSolver.prototype.downRight = function(row, col){
    var diag = [];
    while((row + 1) < this.gridLength && (col + 1) < this.gridLength){
      diag.push([row += 1, col += 1]);
    }
    return diag;
  };

  QueenSolver.prototype.allUnavailableDiags = function(){
    var queenCoords = this.findAllQueens();
    var allDiags = [];

    queenCoords.forEach(function(coord){
      allDiags = allDiags.concat(this.unavailableDiags(coord[0], coord[1]));
    }.bind(this))

    return allDiags;
  };

  QueenSolver.prototype.unavailableDiags = function(row, col){
    return this.upRight(row, col).concat(this.downRight(row, col)).concat(this.downLeft(row, col)).concat(this.upLeft(row, col));
  };

  QueenSolver.prototype.findAllQueens = function(){
    var queenCoords = [];
    this.allCoords.forEach(function(coord){
      if(this.rows[coord[0]][coord[1]] === "Q"){
        queenCoords.push(coord);
      }
    }.bind(this))
    return queenCoords;
  };

  var newQueenSolver = new QueenSolver(8, 8);
  newQueenSolver.placeQueen();
  newQueenSolver.render();
})();
