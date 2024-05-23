function isPalindrome(str) {
    if (str.length === 1) return true; 

    let first = str[0];
    let last = str[str.length - 1];
    return (first === last) && isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('tacocat'));