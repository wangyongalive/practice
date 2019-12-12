function Queue() {
    let items = [];
    // 向队列尾部添加一个（或多个）新的项
    this.enqueue = function (element) {
        items.push(element);
    };
    // 移除队列的第一项，并返回被移除的元素
    this.dequeue = function () {
        if (this.isEmpty()) {
            console.log('队列为空');
            return;
        }
        return items.shift();
    };
    // 返回队列中第一个元
    this.front = function () {
        if (this.isEmpty()) {
            console.log('队列为空');
            return;
        }
        return items[0];
    };
    // 如果队列中不包含任何元素，返回true，否则返回false
    this.isEmpty = function () {
        return items.length === 0;
    };
    // 清空
    this.clear = function () {
        items = [];
    };
    // 返回队列包含的元素个数，与数组的length属性类似。
    this.size = function () {
        return items.length;
    };
    // 打印输出
    this.print = function () {
        console.log(items.toString());
    };
}

module.exports = Queue;
