function capitalizeFirst(arr) {

    function helper(arr, index) {
        if (index === arr.length) return; 

        let str = arr[index];
        arr[index] = str[0].toUpperCase() + str.slice(1);
        helper(arr, index + 1);
    }

    helper (arr, 0);
    return arr;
}

console.log(capitalizeFirst(['car','taco','banana']));