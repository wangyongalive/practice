function Set() {
    let items = {};
    // add(value)：向集合添加一个新的项。
    // delete(value)：从集合移除一个值。
    // has(value)：如果值在集合中，返回true，否则返回false。
    // clear()：移除集合中的所有项。
    // size()：返回集合所包含元素的数量。与数组的length属性类似。
    // values()：返回一个包含集合中所有值的数组。
    this.add = function (item) {
        if (!this.has(item)) {
            items[item] = item;
            return true;
        }
        return false;
    };

    this.remove = function (item) {
        if (this.has(item)) {
            delete items[item];
            return true;
        }
        return false;
    };

    // 会被add、remove方法调用
    this.has = function (item) {
        // return item in items;  // 会去原型链找
        return items.hasOwnProperty(item); // 不会去原型链找
    };


    this.clear = function () {
        items = {};
    };

    this.size = function () {
        return Object.keys(items).length;
    };

    this.values = function () {
        let values = [];
        for (let key in items) {
            // 不在原型链上查找
            if (items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };
}


module.exports = Set;

// let set = new Set();
// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());
// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());
// set.remove(1);
// console.log(set.values());
// set.remove(2);
// console.log(set.values());
