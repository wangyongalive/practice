function Dictionary() {
// set(key,value)：向字典中添加新元素。
// delete(key)：通过使用键值来从字典中移除键值对应的数据值。
// has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false。
// get(key)：通过键值查找特定的数值并返回。
// clear()：将这个字典中的所有元素全部删除。
// size()：返回字典所包含元素的数量。与数组的length属性类似。
// keys()：将字典所包含的所有键名以数组形式返回。
// values()：将字典所包含的所有数值以数组形式返回。
    let items = {};
    this.set = function (key, value) {
        items[key] = value;
    };
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.has = function (key) {
        return key in items;
    };
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.values = function () {
        let values = [];
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.keys = function () {
        return Object.keys(items);
    };
    this.getItems = function () {
        return items;
    };
}


// let dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');
// console.log(dictionary.has('Gandalf'));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));
// dictionary.delete('John');
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());
