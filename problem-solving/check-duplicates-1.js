function areThereDuplicates(...variables) {
    if (variables.length <= 1) {
        return false;
    }
    let variableCounts = {};
    for (let variable of variables) {
        if (variableCounts[variable]) {
            return true;
        } else {
            variableCounts[variable] = 1;
        }
    }
    return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 