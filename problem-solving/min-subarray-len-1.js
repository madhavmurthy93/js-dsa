function minSubArrayLen(array, sum) {
    // short circuits
    if (!array) return 0;

    // normal case
    let minSum = array[0];
    let min = 0;
    let start = 0;
    let end = 0;
    while (end < array.length) {
        if (minSum >= sum) {
            (min) ? min = Math.min(min, end - start + 1) : min = end - start + 1;
            minSum -= array[start];
            start++;
        } else {
            end++;
            minSum += array[end];
        }
    }
    return min;
};

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)); // 0
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5