function sameFrequency(first, second) {
    if (parseInt(Math.log10(first)) !== parseInt(Math.log10(second))) {
        return false;
    }

    let digitCounter = {};
    let x = first;
    let y = second;

    while (x > 0) {
        let digit = x % 10;
        digitCounter[digit] ? digitCounter[digit] += 1 : digitCounter[digit] = 1;
        x = parseInt(x / 10);
    }

    while (y > 0) {
        let digit = y % 10;
        // if digit doesn't exist in map or digit count is zero
        if (!digitCounter[digit]) {
            return false;
        } else {
            digitCounter[digit] -= 1;
        }
        y = parseInt(y / 10);
    }

    return true;
};

console.log(sameFrequency(182,281));
console.log(sameFrequency(22,222));