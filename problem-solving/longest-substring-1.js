function findLongestSubstring(string) {
    if (!string) return 0;
    let longest = 0;
    let start = 0;
    let end = 0;
    let charCounter = {};
    while (end < string.length) {
        let char = string[end];
        let index = charCounter[char];
        if (index === undefined) {
            charCounter[char] = end;
            longest = Math.max(longest, end - start + 1);
            end++;
        } else {
            start = index + 1;
            end = start; 
            charCounter = {};
        }
    }
    return longest;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6