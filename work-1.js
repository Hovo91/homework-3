function checkArray(array = []) {
  let checkArray = array.filter((item) => Array.isArray(item));
  if (checkArray.length !== array.length) {
    return 'Invalid Argument';
    };
  if (checkArray.every((item) => item.every((item) => item >= 0))) {
    return 'No negatives';
    };
    let arrayWithNegs = checkArray.map((item) => item.filter((item) => item < 0));
    let arrayWithMaxNeg = arrayWithNegs.map((item) => item.length === 0 ? item.push(1) : item.reduce((min, item) => min > item ? min : item));
  return arrayWithMaxNeg.reduce((product, elem) => product * elem);
}

console.log(checkArray([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
