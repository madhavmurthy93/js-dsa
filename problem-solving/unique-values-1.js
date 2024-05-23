function countUniqueValues(arr) {
    if (arr.length == 0) {
        return 0;
    }
    let countUnique = 1;
    let last = arr[0];
    let current = arr[0];
    for (let i = 1; i < arr.length; i++) {
        current = arr[i];
        if (current !== last) {
            countUnique += 1;
        }
        last = current;
    }
    console.log(countUnique);
    return countUnique;
};

countUniqueValues([1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])