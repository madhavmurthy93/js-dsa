function areThereDuplicates(...variables) {
    if (variables.length <= 1) {
        return false;
    }
    // Sort, O(nlogn)
    variables.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    // Compare current and next
    let current = variables[0];
    let next = variables[0];
    for (let i = 1; i < variables.length; i++) {
        next = variables[i];
        if (current === next) {
            return true;
        }
        current = next;
    }
    return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true 