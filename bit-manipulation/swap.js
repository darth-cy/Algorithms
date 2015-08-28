(function(){
  if(typeof Binary === "undefined"){
    Binary = {}
  }

  Binary.swap = function(x, y){
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
  };
})();
