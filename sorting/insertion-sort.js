function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    console.log(arr);
}

insertionSort([45, 22, 13, 25, 1, 9, 32, 2, 100, 5, 11, 20]);