if(typeof Mathematics == 'undefined'){
  Mathematics = {};
};

Mathematics.findAngleAtTime = function(str){
  var time = str.split(":");

  var hourAngle = Number(time[0]) * 30 + (Number(time[1])/60) * 30;
  var minuteAngle = (Number(time[1]) / 60) * 360;

  return Math.abs(hourAngle - minuteAngle);
};

module.exports = Mathematics;
