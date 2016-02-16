if(typeof StringUtility == 'undefined'){
  StringUtility = {};
}

StringUtility.isAnagram = function(str1, str2){
  var stringStore = {};
  var char;

  for(var i = 0; i< str1.length; i++){
    char = str1[i];
    if(stringStore[char]){
      stringStore[char] += 1;
    }else{
      stringStore[char] = 1;
    }
  }

  for(var j = 0; j< str2.length; j++){
    char = str2[j];
    if(stringStore[char]){
      stringStore[char] -= 1;
    }else{
      return false;
    }
  }

  for(var key in stringStore){
    if(stringStore[key] !== 0){
      return false;
    }
  }

  return true;
};

module.exports = StringUtility;
