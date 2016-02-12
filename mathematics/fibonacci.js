if(typeof Mathematics == "undefined"){
  Mathematics = {};
};

Mathematics.fibonacci = function(n){
  var holder = [1, 1, 2];
  if(n <= 2){
    return holder[n];
  };

  var result = n;

  while((n - 3) > 0){
    holder[n % 3] = holder[(n + 1) % 3] + holder[(n + 2) % 3];
    n -= 1;
  };

  return holder[result % 3];
};

// Mathematics.fibonacci = function(n){
//   if(n == 1 || n == 0){ return 1; };
//   return Mathematics.fibonacci(n - 1) + Mathematics.fibonacci(n - 2);
// };
