/*1.数组去重 开始*/
// let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
// ary = [...new Set(ary)];
// console.log(ary);
/*1.数组去重 结束*/

/*2.数组扁平化 开始*/
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

/*2.1 ES6方法直接实现*/
// arr=arr.flat(Infinity);

/*2.2 转换为字符串*/
// arr=arr.toString().split(',').map(item=>parseFloat(item));
// arr = JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => parseFloat(item));

/*2.3 循环验证是否为数组*/
// while (arr.some(item => Array.isArray(item))) {
//  arr = [].concat(...arr);
// }

/*2.数组扁平化 结束*/


/*3.斐波那契数列 开始*/
// 请实现一个fibonacci [ˌfɪbəˈnɑːtʃi] 函数，要求实现以下的功能：
// 斐波那契数列为：[1,1,2,3,5,8,13,21,…]
// fibonacci(0) -> 1
// fibonacci(4) -> 5
let fibonacci = (function () {
    let temp = [1, 1];
    return function (n) {
        let result = temp[n];
        if (typeof result != 'number') {
            result = fibonacci(n - 1) + fibonacci(n - 2);
            temp[n] = result; // 将每次 fibonacci(n) 的值都缓存下来
        }
        return result;
    }
})();
console.log(fibonacci(0));
console.log(fibonacci(4));
/*3.斐波那契数列 结束*/
