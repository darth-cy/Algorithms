if(typeof Mathematics == "undefined"){
  Mathematics = {};
};

Mathematics.pow = function(base, power){
  if(power == 1){
    return base;
  }else if(power % 2 == 0){
    var last = Mathematics.pow(base, power/2);
    return last * last;
  }else{
    var last = Mathematics.pow(base, (power - 1)/2);
    return last * last * base;
  };
};
