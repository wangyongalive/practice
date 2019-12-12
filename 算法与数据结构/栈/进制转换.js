// 导入模块
let Stack = require('./Stack');

function divideBy2(decNumber) {
    let stack = new Stack(), rem, result = '';
    rem = decNumber % 2;
    stack.push(rem);
    decNumber = Math.floor(decNumber / 2);
    while (decNumber) {
        rem = decNumber % 2;
        stack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!stack.isEmpty()) {
        result += stack.pop() + '';
    }
    return result;
}

console.log(divideBy2(233));
console.log(divideBy2(0));
console.log(divideBy2(1000));

// 10-->其他
console.log('\n10-->其他');

function baseConverter(decNumber, base) {
    let stack = new Stack(), rem, result = '', digits = '0123456789ABCDEF'; // 保证满足16进制
    rem = decNumber % 2;
    stack.push(rem);
    decNumber = Math.floor(decNumber / 2);
    while (decNumber) {
        rem = decNumber % 2;
        stack.push(digits[rem]);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!stack.isEmpty()) {
        result += stack.pop() + '';
    }
    return result;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
