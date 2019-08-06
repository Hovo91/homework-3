function addTwoDimensionalArray(array = []){
  let oneDimensionalArray = array.map(function(item) {
    return item.reduce(function(sum, item) {
      return sum + item;
    });
  });
  return oneDimensionalArray;
}

console.log(addTwoDimensionalArray([[1], [2], [3], [4]]));
