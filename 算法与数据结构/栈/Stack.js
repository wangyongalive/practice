function Stack() {
    let items = [];
    // 添加一个（或几个）新元素到栈顶
    this.push = function (item) {
        items.push(item);
    };

    // 移除栈顶的元素，同时返回被移除的元素。
    this.pop = function () {
        if (this.isEmpty()) {
            console.log('数组为空');
            return;
        }
        return items.pop();
    };

    // 返回栈顶的元素，不对栈做任何修改
    this.peek = function () {
        if (this.isEmpty()) {
            console.log('数组为空');
            return;
        }
        return items[items.length - 1];
    };

    // 如果栈里没有任何元素就返回true，否则返回false
    this.isEmpty = function () {
        return items.length === 0;
    };

    // 返回栈里的元素个数
    this.size = function () {
        return items.length;
    };

    // 移除栈里的所有元素
    this.clear = function () {
        items = [];
    };

    // 打印出所有的元素
    this.print = function () {
        console.log(items.toString());
    };

    // 变为字符串
    this.toString = function () {
        return items.toString();
    };
}

module.exports = Stack;

// let stack = new Stack();
// console.log(stack.isEmpty()); //outputs true
// stack.push(5);
// stack.push(8);
// console.log(stack.peek()); // outputs 8
// stack.push(11);
// console.log(stack.size()); // outputs 3
// console.log(stack.isEmpty()); //outputs false
// stack.push(15);
// stack.pop();
// stack.pop();
// console.log(stack.size()); // outputs 2
// stack.print(); // outputs [5, 8]
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
