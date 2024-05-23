function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
}