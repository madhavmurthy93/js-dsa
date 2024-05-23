function flatten(arr) {
    if (arr.length === 1 && !Array.isArray(arr[0])) return arr;
    if (arr.length === 1 && Array.isArray(arr[0])) return flatten(arr[0]);
    
    let val = arr[0];
    let newArr = [];
    if (Array.isArray(val)) {
        newArr = newArr.concat(flatten(val));
    } else {
        newArr = newArr.concat([val]);
    }
    newArr = newArr.concat(flatten(arr.slice(1)));
    return newArr; 
}

console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));