function capitalizeWords(arr) {

    function capitalizeWord(str) {
        if (str.length === 1) return str.toUpperCase(); 

        return str[0].toUpperCase() + capitalizeWord(str.slice(1));
    }

    function helper(arr, index) {
        if (index === arr.length) return;

        let str = arr[index];
        arr[index] = capitalizeWord(str); 
        helper(arr, index + 1);
    }

    helper(arr, 0);
    return arr;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));