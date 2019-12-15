const type = para => Object.prototype.toString.call(para).slice(8, -1);

// 生成数组 生成数据的函数单独抽取出来
const createArr = (n) => new Array(n).fill(0).map((item, index) => index);

// 数组随机排序  洗牌算法
const createArrRandom = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let rdmIdx = Math.floor(Math.random() * i);
        [arr[rdmIdx], arr[i]] = [arr[i], arr[rdmIdx]];
    }
    return arr;
};

const bubbleAsSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

const bubbleDeSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

// 插入排序 升序
const insertAsSort = (arr) => {
    let length = arr.length,
        j, temp;
    for (let i = 1; i < length; i++) {  // 认为第一项已经排好序
        j = i; // 临时
        temp = arr[i];  // 临时变量
        while (j > 0 && arr[j - 1] > temp) { // 寻找j的位置
            arr[j] = arr[j - 1];   // 往后移动
            j--;
        }
        arr[j] = temp; // 插入j的位置
    }
    return arr;
};


// 插入排序 降序
const insertDeSort = (arr) => {
    let length = arr.length,
        j, temp;
    for (let i = 1; i < length; i++) {  // 认为第一项已经排好序
        j = i; // 临时
        temp = arr[i];  // 临时变量
        while (j > 0 && arr[j - 1] < temp) { // 寻找j的位置
            arr[j] = arr[j - 1];   // 往后移动
            j--;
        }
        arr[j] = temp; // 插入j的位置
    }
    return arr;
};

// 两个数之间累乘积 如果没有传递第二个参数就是阶乘
const mult = (x, y = 1) => {
    let min = Math.min(x, y);
    let max = Math.max(x, y);
    let count = 1;
    for (let i = max; i >= min; i--) {
        count *= i;
    }
    return count;
};

/*exports 返回的是模块函数，module.exports 返回的是模块对象本身，返回的是一个类*/
// 一个模块文件中可以有多个exports输出，但只能有一个module.exports输出
module.exports = {
    type,
    createArr,
    createArrRandom,
    bubbleAsSort,
    bubbleDeSort,
    insertAsSort,
    insertDeSort,
    mult
};

