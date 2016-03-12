if(typeof Search == "undefined"){
  Search = {};
}

Array.prototype.containAny = function(el){
  for(var i = 0; i< this.length; i++){
    if(this[i] == el){
      return true;
    }
  }
  return false;
}

Array.prototype.last = function(){
  return this[this.length - 1];
}

Search.longestCommonSubsequence = function(arr1, arr2){
  var longestSequence = [];
  var currentSequence = [];

  var indexStore = {};
  for(var i = 0; i < arr1.length; i++){
    if(!indexStore[arr1[i]]){
      indexStore[arr1[i]] = [i];
    }else{
      indexStore[arr1[i]].push(i);
    }
  }

  var newArr2 = [];
  arr2.forEach(function(el){
    newArr2.push(indexStore[el]);
  });

  for(var j = 0; j < newArr2.length; j++){
    var currentIndex = newArr2[j][0];
    if(currentSequence.length < 1 || currentIndex == currentSequence.last() + 1){
      currentSequence.push(currentIndex);
      if(currentSequence.length > longestSequence.length){
        longestSequence = currentSequence.slice(0);
      }
    }else{
      if(currentSequence.length > longestSequence.length){
        longestSequence = currentSequence.slice(0);
      }
      currentSequence = [];
    }
  }

  var result = [];
  for(var k = 0; k< longestSequence.length; k++){
    result.push(arr1[longestSequence[k]]);
  }

  return result;
}

module.exports = Search;
