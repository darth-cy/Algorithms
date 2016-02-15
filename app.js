var Sorting = require('./sorting-algorithms/heapSort');
var Mathematics = require('./mathematics/largestContiguousSum');
var StringUtility = require('./strings/compression');
var StringUtility = require('./strings/isPermutation');

console.log(StringUtility.compress("ssiuuidooomwwkjj"));
console.log(StringUtility.isPermutation("abcde", "edasb"));
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
