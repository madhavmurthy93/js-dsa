
function mergeSort(arr) {
    function merge(arr1, arr2) {
        let i = 0;
        let j = 0;
        let merged = [];
        while (i < arr1.length && j < arr2.length) {
            let val1 = arr1[i];
            let val2 = arr2[j];
            if (val1 < val2) {
                merged.push(val1);
                i++;
            } else {
                merged.push(val2);
                j++
            }
        }

        while (i < arr1.length) {
            merged.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            merged.push(arr2[j]);
            j++;
        }
        return merged;
    }

    if (arr.length <= 1) return arr;

    let mid = parseInt(arr.length / 2);
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(mergeSort([45, 22, 13, 25, 1, 9, 32, 2, 100, 5, 11, 20]));