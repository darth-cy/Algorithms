(function(){
  if(typeof Binary === "undefined"){
    Binary = {};
  }

  Binary.findMissing = function(arr1, arr2){
    var a = 0;

    arr1.concat(arr2).forEach(function(num){
      a = a ^ num;
    })

    return a;
  }
})();
