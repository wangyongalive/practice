function Search() {
    let array = [];

    this.insert = function (item) {
        array.push(item);
    };

    let swap = function (index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };

    this.toString = function () {
        return array.join();
    };

    // 顺序搜索
    this.sequentialSearch = function (item) {
        for (let i = 0; i < array.length; i++) { // 遍历
            if (item === array[i]) {
                return i;
            }
        }
        return -1; // -1 表示失败
    };

    // 找最大值
    this.findMaxValue = function () {
        let max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    };

    // 找最小值
    this.findMinValue = function () {
        let min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    };


    // 二分搜索算法
    // 要求被搜索的数据结构已排序
    // (1) 选择数组的中间值。
    // (2) 如果选中值是待搜索值，那么算法执行完毕（值找到了）。
    // (3) 如果待搜索值比选中值要小，则返回步骤1并在选中值左边的子数组中寻找。
    // (4) 如果待搜索值比选中值要大，则返回步骤1并在选种值右边的子数组中寻找
    this.binarySearch = function (item) {
        let low = 0,
            high = array.length - 1,
            mid, midItem;

        while (low <= high) { // 等号
            mid = Math.floor((low + high) / 2);
            midItem = array[mid];
            if (midItem < item) {
                low = mid + 1;
            } else if (midItem > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    };
}
