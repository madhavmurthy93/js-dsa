function fib(num, memo=[]) {
    if (memo[num] != undefined) {
        return memo[num];
    }
    if (num === 1 || num === 2) return 1;

    let res = fib(num - 1, memo) + fib(num - 2, memo);
    memo[num] = res;
    return res;
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(40));
console.log(fib(100));