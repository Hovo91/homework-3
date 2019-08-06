function numberAndStringCounts(array = []) {
  let arrayOfNum = array.filter(function(item) {
    return Math.floor(item) === item;
  });
  let arrayOfStr = array.filter(function(item) {
    return typeof item === 'string';
  });
  return `Numbers: ${arrayOfNum.length}, Strings: ${arrayOfStr.length}`
}

console.log(numberAndStringCounts([1, "‘10’", "‘hi’", 2, 3, 4, 2.3, 54, 5.2, -5, 0, '+']));
