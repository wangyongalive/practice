// 递归并不比普通版本更快，反倒更慢。但要知道，递归更容易理解，
// 并且它所需的代码量更少。

// 斐波那契数列
function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }
    if (num > 2) {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// 非递归的方式
function fib(num) {
    var n1 = 1,
        n2 = 1,
        n = 1;
    for (let i = 3; i <= num; i++) {
        n = n1 + n2;
        n1 = n2;
        n2 = n;
    }
    return n;
}

console.log(fibonacci(6));
console.log(fib(6));
