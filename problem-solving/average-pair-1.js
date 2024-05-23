function averagePair(array, average) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        let avg = (array[i] + array[j]) / 2;
        if (avg === average) {
            return true;
        } else if (avg > average) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};

console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false