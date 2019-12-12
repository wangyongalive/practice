// 单向链表
function LinkedList() {
    let Node = function (item) {
        this.item = item;
        this.next = null;
    };
    let length = 0; // 链表长度
    let head = null;

    // 向链表尾部添加元素
    this.append = function (item) {
        let node = new Node(item), current;
        if (head === null) { // 列表中的第一个节点
            head = node; // head 指向第一个节点
        } else {
            current = head;
            // 循环列表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            // 找到最后一项，将其next赋为node
            current.next = node;
        }
        length++; // 更新列表长度
    };

    // 在任意位置插入元素
    this.insert = function (pos, item) {
        // 检查越界值
        if (pos >= 0 && pos <= length) {
            let node = new Node(item),
                current = head,
                previous,
                index = 0;
            if (pos === 0) { // 在第一个位置添加
                node.next = current;
                head = node;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++; // 更新列表长度
            return true;
        } else {
            return false;
        }
    };

    // 从链表中移除元素
    this.removeAt = function (pos) {
        //检查越界值
        if (pos > -1 && pos < length) {
            let current = head, previous, index = 0;
            // 移除第一项
            if (pos === 0) {
                head = current.next;
            } else { // 中间项和最后一项
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                // 跳过current,从而移除current
                previous.next = current.next;
            }
            length--;
            return current.item;
        } else {
            return null;
        }
    };

    // 删除指定元素的值
    this.remove = function (item) {
        let index = this.indexOf(item);
        return this.removeAt(index);
    };

    // 返回指定元素的索引
    this.indexOf = function (item) {
        let current = head, index = 0;
        while (current) {
            if (item === current.item) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };

    this.toString = function () {
        let curent = head, string = '';
        while (curent) {
            string += curent.item + (curent.next ? "->" : "");
            curent = curent.next;
        }
        return string;
    };

    this.print = function () {
        let curent = head, string = '';
        while (curent) {
            string += curent.item + (curent.next ? "->" : "");
            curent = curent.next;
        }
        console.log(string);
    };
}

let link = new LinkedList();
link.append(10);
link.append(15);
link.append(20);
console.log(link.indexOf(10));
console.log(link.indexOf(20));
console.log(link.indexOf(30));
console.log(link.toString());
link.print();
