// 划分
let partition = function (arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) { // 等号
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++; // 自增
            j--; // 自减
        }
    }
    return i; // 返回左指针
};
let quick = function (arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right); // 划分后的索引
        if (left < index - 1) { // index - 1
            quick(arr, left, index - 1);
        }
        if (right > index) {
            quick(arr, index, right);
        }
    }
    return arr;
};
let arr = Array(10).fill(0).map((item, index) => index).sort(() => Math.random() - 0.5);
console.log(arr);
console.log(quick(arr, 0, 9));
