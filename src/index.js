/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var arr = preferences.map(function(index) {return index-1;});
  
  for (var i = 0; i<arr.length; i++) {
      if (i === arr[arr[arr[i]]]) count += 1;      
  }
  return Math.floor(count/3);
};
