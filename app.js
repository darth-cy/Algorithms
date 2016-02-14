var Sorting = require('./sorting-algorithms/heapSort');
var Mathematics = require('./mathematics/largestContiguousSum');

console.log(Sorting.heapSort([2,62,1,7,40,13,4,63,21,45]));
console.log(Mathematics.largestContiguousSum([1,5,-9, 10, -112, -55, 5, -8, 6, -3, 17]));

// var count = {};
// for(var i = 0; i < 10000; i++){
//   var num = Mathematics.randomWeighted(['Aaron', 'Brian', 'Casey', 'Dylan'], [1, 2, 2, 5]);
//   if(!count[num]){ count[num] = 0; };
//
//   count[num] += 1;
// };
//
// for(var key in count){
//   console.log("key: " + key + " have " + count[key] / 10000);
// };

// Fibonacci Numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
