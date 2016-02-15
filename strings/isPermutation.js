if(typeof StringUtility == 'undefined'){
  StringUtility = {};
}

StringUtility.isPermutation = function(str1, str2){
  var strHash = {};

  for(var i= 0; i < str1.length; i++){
    var char = str1[i];

    if(!strHash[char]){
      strHash[char] = 1;
    }else{
      strHash[char] += 1;
    }
  }

  for(var j = 0; j < str2.length; j++){
    var char = str2[j];

    if(!strHash[char]){
      return false;
    }else{
      strHash[char] -= 1;
    }
  }

  for(var key in strHash){
    if(strHash[key] !== 0){
      return false;
    }
  }

  return true;
};

module.exports = StringUtility;
