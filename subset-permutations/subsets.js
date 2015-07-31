(function(){

  if(typeof Permutation === "undefined"){
    Permutation = {};
  }

  Permutation.subsets = function(arr){
    if(arr.length < 1){ return [[]]; }

    var firstElement = arr[0];
    var previousSubsets = Permutation.subsets(arr.slice(1));
    var newSubsets = [];

    for(var i = 0; i < previousSubsets.length; i++){
      newSubsets.push(previousSubsets[i].slice(0));
      newSubsets[i].push(firstElement);
    }

    return previousSubsets.concat(newSubsets);
  }

  // console.log(Permutation.subsets([1,2,3,4,5,6]));

})();
