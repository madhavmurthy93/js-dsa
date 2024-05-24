function radixSort(arr) {
    function getDigit(num, place) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }

    function mostDigits(arr) {
        function getDigitCount(num) {
            if (num === 0) return 1;
            return Math.floor(Math.log10(Math.abs(num))) + 1;
        }

        let max = 0;
        for (let num of arr) {
            max = Math.max(max, getDigitCount(num));
        }

        return max;
    }
    
    let max = mostDigits(arr);
    for (let i = 0; i < max; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let num = arr[j];
            let digit = getDigit(num, i);
            buckets[digit].push(num);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

console.log(radixSort([100, 1020, 20, 11, 4, 1202, 39, 199, 382, 102, 32, 3, 1, 84, 876]));