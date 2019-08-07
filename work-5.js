function containingOnceElementOfArray(array = []) {
  let newArray = [];
  let sortArray = array.sort();
  sortArray.forEach((item, i, array) => {
    if (array[i] !== array[i + 1]) {
      return newArray.push(array[i])
    }
  });
  return newArray;
}

console.log(containingOnceElementOfArray([2, 2, 9, 3, 2, 3, 11, 11]));
