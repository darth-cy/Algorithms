if(typeof StringUtility == 'undefined'){
  StringUtility = {};
}

StringUtility.compress = function(str){
  var result = "";
  var currentChar = "";
  var currentCount = 0;

  for(var i = 0; i < str.length; i++){
    if(!currentChar || str[i] !== currentChar){
      result += currentChar;
      result += currentCount;

      currentChar = str[i];
      currentCount = 1;
    }else{
      currentCount += 1;
    }
  }

  result += currentChar;
  result += currentCount;

  return result.slice(1);
}

module.exports = StringUtility;
