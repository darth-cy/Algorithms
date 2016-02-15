if(typeof StringUtility == 'undefined'){
  StringUtility = {};
}

StringUtility.longestPalindrome = function(str){
  var str = str.split("").join(" ");
  var longest = 0;
  var longestLeft, longestRight;

  for(var i = 0; i < str.length; i++){
    left = i - 1;
    right = i + 1;

    while(left > 0 && right < str.length && str[left] == str[right]){
      left -= 1;
      right += 1;
    }

    var newLong = right - left - 2;
    if(newLong > longest){
      longest = newLong;
      longestLeft = left + 1;
      longestRight = right - 1;
    };
  }

  return str.slice(longestLeft, longestRight).split(" ").join("");
};

module.exports = StringUtility;
