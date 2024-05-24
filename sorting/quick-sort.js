function quickSort(arr) {
    function partition(arr) {
        if (arr.length <= 1) return;

        let start = 0;
        let pivot = arr[start];
        let bound = start + 1;
        for (let i = bound; i < arr.length; i++) {
            if (arr[i] < pivot) {
                let temp = arr[bound];
                arr[bound] = arr[i];
                arr[i] = temp;
                bound++;
            }
        }
        let temp = arr[bound - 1];
        arr[bound - 1] = pivot;
        arr[start] = temp;
        return (bound - 1);
    }

    if (arr.length <= 1) return arr;

    let pivot = partition(arr);
    let left = quickSort(arr.slice(0, pivot));
    let right = quickSort(arr.slice(pivot + 1, arr.length));
    return left.concat([arr[pivot]]).concat(right);
}

console.log(quickSort([4, 22, 13, 25, 1, 9, 32, 2, 100, 5, 11, 20]));
console.log(quickSort([100, 1020, 20, 11, 4, 1202, 39, 199, 382, 102, 32, 3, 1, 84, 876]));