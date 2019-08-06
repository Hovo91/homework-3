function multipliedArray(array = []) {
  let newArray = array.filter(function(item) {
    return item % 2;
  });
  let multipliedArray = newArray.map(function(item) {
    return item * newArray.length;
  })
  return multipliedArray;
}

console.log(multipliedArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
