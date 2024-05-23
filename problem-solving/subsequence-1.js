function isSubsequence(subString, string) {
    if (subString.length > string.length) {
        return false;
    }
    let i = 0;
    let j = 0;
    while (i < subString.length && j < string.length) {
        let charSub = subString[i];
        let char = string[j];
        if (charSub === char) {
            i++;
        }
        if (i === subString.length) {
            return true;
        }
        j++;
    }
    return false;
};

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));