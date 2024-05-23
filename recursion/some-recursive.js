function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (arr.length === 1) return callback(arr[0]);

    return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([4,6,8], val => val > 10));
console.log(someRecursive([1,2,3,4], val => val % 2 !== 0));