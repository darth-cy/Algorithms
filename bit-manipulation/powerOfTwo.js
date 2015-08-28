(function(){
  if(typeof Binary === "undefined"){
    Binary = {};
  }

  Binary.powerOfTwo = function(num){
    return (num > 0) && (num & (num - 1)) === 0;
  };
})();
