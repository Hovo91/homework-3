function productsTwoNeighbours(array = []) {
    let newArray = [];
    array.forEach((item, i, array) => newArray.push(array[i] * array[i + 1]));
    newArray.pop();
    return newArray;
}

console.log(productsTwoNeighbours([3, 7, 12, 5, 20, 0]));
