(function(){
  if(typeof Permutation === "undefined"){
    Permutation = {};
  }

  Permutation.permutation = function(arr){
    if(arr.length < 1){ return [[]]; }

    var firstElement = arr[0];
    var previousPermutation = Permutation.permutation(arr.slice(1));
    var newPermutation = [];

    for(var i = 0; i < previousPermutation.length; i++){
      perm = previousPermutation[i];
      for(var j = 0; j <= perm.length; j++){
        left = perm.slice(0, j);
        right = perm.slice(j, perm.length);

        newPerm = left.concat(firstElement).concat(right);
        newPermutation.push(newPerm);
      }
    }

    return newPermutation;
  }

  // console.log(Permutation.permutation([1,2,3]));
})();
