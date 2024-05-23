// A function that takes 2 string as inputs and determines if they are anagrams of each other
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    // create a character counter object
    let charCounter = {};
    // for each char in str1, increase the count
    for (let char of str1) {
        charCounter[char] ? charCounter[char] += 1 : charCounter[char] = 1;
    }
    // for each char in str2, decrease the count
    for (let char of str2) {
        charCounter[char] ? charCounter[char] -= 1 : charCounter[char] = -1;
    }
    console.log(charCounter);
    // The count for each char should be 0 for the 2 strings to be anagrams
    for (let char in charCounter) {
        if (charCounter[char] !== 0) {
            return false;
        }
    }
    return true;
}

// How do I simplify?
// In the process of doing -=1 in the 2nd for loop, also return false once the value is going to go below 0
// No longer need the 3rd for loop