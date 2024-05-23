function maxSubarraySum(array, len) {
    if (len > array.length) return null;
    // find first sum
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += array[i];
    }
    let maxSum = sum;

    // for loop, move window, calculate new sum, save the max
    for (let i = 1; i < array.length - len + 1; i++) {
        sum = sum - array[i - 1] + array[i + len - 1];
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
};

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null