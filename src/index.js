 
exports.min = function min (array=[]) {
  return array.length > 0  ? Math.min( ...array) : 0; 
}

exports.max = function max (array=[]) {
  return array.length > 0  ? Math.max( ...array) : 0; 
}

exports.avg = function avg (array=[]) {
  var res = 0;
  for(var i = 0; i < array.length; i++) {
    res += array[i];
  }
  return array.length > 0 ? res/array.length :0;
}
