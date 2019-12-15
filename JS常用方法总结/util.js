type = para => Object.prototype.toString.call(para).slice(8, -1);

// 生成数组 生成数据的函数单独抽取出来
createArr = (n) => new Array(n).fill(0).map((item, index) => index);

// 数组随机排序  洗牌算法
createArrRandom = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let rdmIdx = Math.floor(Math.random() * i);
        [arr[rdmIdx], arr[i]] = [arr[i], arr[rdmIdx]];
    }
    return arr;
};

bubbleAsSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

bubbleDeSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

/*exports 返回的是模块函数，module.exports 返回的是模块对象本身，返回的是一个类*/
// 一个模块文件中可以有多个exports输出，但只能有一个module.exports输出
module.exports = {
    type,
    createArr,
    createArrRandom,
    bubbleAsSort,
    bubbleDeSort,
};

