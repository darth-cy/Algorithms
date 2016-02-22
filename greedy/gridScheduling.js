if(typeof Schedule == 'undefined'){
  Schedule = {};
}

function mergeSort(arr, comparator){
  if(arr.length < 2){ return arr; }

  var midIdx = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, midIdx), comparator);
  var right = mergeSort(arr.slice(midIdx), comparator);

  return merge(left, right, comparator);
}

function merge(arr1, arr2, comparator){
  var result = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(comparator(arr1[0], arr2[0])){
      result.push(arr1.shift());
    }else{
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1).concat(arr2);
}

// Tasks in the format of { id: String, gridSize: int, profit: int }
Schedule.schedule = function(tasks, totalGrid){
  var comparator = function(a, b){
    return (a.profit / a.gridSize) > (b.profit / b.gridSize);
  };

  var tasks = mergeSort(tasks, comparator);
  var grid = Array.apply(null, Array(totalGrid)).map(x => false);

  var gridPosition = 0;
  for(var i = 0; i < tasks.length; i++){
    if(gridPosition >= grid.length - 1){
      break;
    }
    var task = tasks[i];
    if(gridPosition + task.gridSize <= grid.length){
      for(var j = 0; j < task.gridSize; j++){
        grid[gridPosition + j] = task.id;
      }
      gridPosition += task.gridSize;
    }
  }

  return grid;
};

module.exports = Schedule;
