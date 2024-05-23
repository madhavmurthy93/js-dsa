function searchString(str, substr) {
    let count = 0;
    for (let i = 0; i < str.length - substr.length + 1; i++) {
        let sub = str.slice(i, i + substr.length);
        if (sub === substr) {
            count++;
        }
    }
    return count;
}

console.log(searchString('wowsjhsdomgsjdhomg', 'omg'));