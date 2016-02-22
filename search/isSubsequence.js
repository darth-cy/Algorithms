if(typeof Search == 'undefined'){
  Search = {};
}

Search.isSubsequence = function(str1, str2){
  var i = 0;
  var j = 0;

  while(i < str1.length && j < str2.length){
    if(str1[i] == str2[j]){
      i += 1;
    }

    j += 1;
  }

  return i >= str1.length;
};

module.exports = Search;
