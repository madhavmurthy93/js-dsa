function fib(num, memo=[]) {
    if (memo[num] != undefined) {
        return memo[num];
    }
    if (num === 1 || num === 2) return 1;

    let res = fib(num - 1, memo) + fib(num - 2, memo);
    memo[num] = res;
    return res;
}

function fibTable(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(40));
console.log(fib(100));
console.log(fibTable(100));
console.log(fibTable(100000));
// console.log(fib(100000)); Maximum call stack size exceeded error
