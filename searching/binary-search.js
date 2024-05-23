function binarySearch(sortedArr, value) {
    let left = 0;
    let right = sortedArr.length - 1; 
    while (left <= right) {
        let middle = parseInt((left + right) / 2);
        let element = sortedArr[middle];
        if (value === element) {
            return middle;
        } else if (value > element) {
            left = middle + 1;
        } else if (value < element) {
            right = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8));