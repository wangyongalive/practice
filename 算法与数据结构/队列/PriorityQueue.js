function PriorityQueue() {
    let items = [];

    // 元素、优先级
    function QueueElement(item, priority) {
        this.item = item;
        this.priority = priority;
    };

    // 入队
    this.enqueue = function (element, priority) {
        let item = new QueueElement(element, priority), flag = false;
        if (this.isEmpty()) { // 队列为空，直接添加
            items.push(item);
        } else {
            for (let i = 0; i < items.length; i++) {
                if (items[i].priority < item.priority) {
                    items.splice(i, 0, item);
                    flag = true; // 已经添加的标记
                    break;
                }
            }
        }
        if (!flag) { // 在末尾添加
            items.push(item);
        }
    };
    // 出队
    this.dequeue = function () {
        if (this.isEmpty()) {
            console.log('队列为空');
            return;
        }
        return items.shift();
    };
    // 返回队列中第一个元素
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
        for (let item of items) {
            console.log(`${item.item} --- ${item.priority}`);
        }
    };
}


let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.enqueue("Maxwell", 2);
priorityQueue.enqueue("Ana", 3);
priorityQueue.print();
