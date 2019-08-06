function addTwoDimensionalArray(array = []){
  let oneDimensionalArray = array.map(function(item) {
    return item.reduce(function(sum, item) {
      return sum + item;
    });
  });
  return oneDimensionalArray;
}

console.log(addTwoDimensionalArray([[1], [2], [3], [4]]));

// arrow

function addTwoDimensionalArray(array = []){
  let oneDimensionalArray = array.map((item) => (item.reduce((sum, item) => (sum + item))));
  return oneDimensionalArray;
}

console.log(addTwoDimensionalArray([[1, 1], [2], [3], [4]]));
