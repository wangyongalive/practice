function ArrayList() {
    // 生成随机数
    let array = [...Array(10)].map((item, index) => index).sort(() => Math.random() - 0.5);

    this.insert = function (item) { // 插入
        array.push(item);
    };

    // es6语法
    let swap = function (index1, index2) { // 交换
        [array[index1], array[index2]] = [array[index2], array[index1]]
    };

    this.toString = function () {
        return array.join();
    };

    // 冒泡排序
    // 时间复杂度O(n2)
    // 把本轮最值放到最右边
    // 冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。元素项向上移动至
    // 正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
    this.modifiedBubbleSort = function () {
        let length = array.length;
        for (let i = 0; i < length; i++) { // 多少轮排序
            for (let j = 0; j < length - 1 - i; j++) { // 从索引0到 length-1-i
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    // 选择排序算法
    // 复杂度为O(n2)
    // 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并
    // 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
    this.selectionSort = function () {
        let length = array.length,
            indexMin;
        for (let i = 0; i < length - 1; i++) { // 迭代轮次
            indexMin = i;
            for (let j = i; j < length; j++) { // 从索引i到 length
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) { // 如果该最小值和原最小值不同，则交换其值
                swap(i, indexMin);
            }
        }
    };

    // 插入排序
    // 每次排一个数组项，以此方式构建最后的排序数组
    // 排序小型数组时，此算法比选择排序和冒泡排序性能要好
    this.insertionSort = function () {
        let length = array.length,
            j, temp;
        for (let i = 1; i < length; i++) { // 认为第一项已经排好序
            j = i; // 临时
            temp = array[i]; // 临时变量
            while (j > 0 && array[j - 1] > temp) { // 寻找j的位置
                array[j] = array[j - 1];  // 往后移动
                j--;
            }
            array[j] = temp; // 插入j的位置
        }
    };

    // 快速排序也许是最常用的排序算法了。
    // 它的复杂度为O(nlogn)，且它的性能通常比其他的复
    // 杂度为O(nlogn)的排序算法要好。
    /**
     * 划分
     * @param array
     * @param left
     * @param right
     * @returns {*}
     */
    let partition = function (array, left, right) {
        let pivot = array[Math.floor((right + left) / 2)],  // 选择中间项作为主元
            i = left,
            j = right;
        while (i <= j) {
            while (array[i] < pivot) { // 移动left指针直到找到一个元素比主元大
                i++;
            }
            while (array[j] > pivot) { // 移动right指针直到找到一个元素比主元小
                j--;
            }
            if (i <= j) { // 当指针还在规定范围时 交换
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i; // 返回左指针的索引
    };
    // 快排
    let quick = function (array, left, right) {
        let index;
        if (array.length > 1) {
            index = partition(array, left, right); // 获取索引
            if (left < index - 1) {
                quick(array, left, index - 1);
            }
            if (index < right) {
                quick(array, index, right);
            }
        }
        return array;
    };
    this.quickSort = function () {
        quick(array, 0, array.length - 1);
    };
}

