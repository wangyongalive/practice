{
    // 请问JS中的基本数据类型有几种
// JavaScript 数据类型
// 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
// 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'www';
        let age = 24;
    }

    /*
    * undefined 和 ReferenceError
    * */
// sayHi();
}

console.log('---------------------');
{
    /*
*3 3 3 and 0 1 2
* */
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
}


console.log('---------------------');
{
    let a = 666; // number
    let b = new Number(666); // object
    let c = 666; // number
    console.log(a == b); // true
    console.log(a === b); // false  ToPrimitive(b)
    console.log(b === c); // false
}

console.log('---------------------');
{
    /*
    *  键值会将对象变为字符串
    * */
    const a = {};
    const b = {
        key: 'b',
        // valueOf: function () {
        //     return this.key;
        // },
        toString: function () {
            return this.key;
        }
    };
    const c = {
        key: 'c',
        // valueOf: function () {
        //     return this.key;
        // },
        toString: function () {
            return this.key;
        }
    };
    a[b] = 123;
    a[c] = 456;
    console.log(a[b]); // 123

}
console.log('---------------------');
{
    /*
    *  键值会将对象变为字符串
    * */
    const a = {};
    const b = {
        key: 'b'
    };
    const c = {
        key: 'c'
    };
    a[b] = 123; // b--> [Object object]
    a[c] = 456; // c--> [Object object]
    console.log(a[b]); // 456

}
console.log('---------------------');
{
    const numbers = [1, 2, 3];
    numbers[10] = 11;
    console.log(numbers); // [ 1, 2, 3, <7 empty items>, 11 ]
}
console.log('---------------------');
{
    let number = 0;
    console.log(number++); // 0
    console.log(++number); // 2
    console.log(number);  // 2
}
console.log('---------------------');
{
// 箭頭函數的 this 與其外層的普通函數的 this 一致，與 call、apply、bind 無關。
// 此題，obj1.print 返回一個箭頭函數，此箭頭函數中的 this 就是 obj1.print 調用時的 this。
// obj1.print()()：此時obj1.print 中的 this 為 obj1，所以輸出為 obj1_name
// obj1.print().call(obj2)：此時obj1.print 中的 this 為 obj1，所以輸出為 obj1_name
// obj1.print.call(obj2)()：此時obj1.print 中的 this 為 obj2，所以輸出為 obj2_name

    let obj1 = {
        name: 'obj1_name',
        print: function () {
            return () => console.log(this.name)
        }
    };
    let obj2 = {name: "obj2_name"};
    obj1.print()(); // obj1_name
    obj1.print().call(obj2);// obj1_name
    obj1.print.call(obj2)(); // obj2_name
}
console.log('---------------------');
{
    // 所有对象键（不包括Symbols）都会被存储为字符串，即使你没有给定字符串类型的键。
    // 这就是为什么obj.hasOwnProperty（'1'）也返回true。
    // 上面的说法不适用于Set。 在我们的Set中没有“1”：set.has（'1'）返回false。
    // 它有数字类型1，set.has（1）返回true。
    const obj = {1: "a", 2: "b", 3: "c"};
    const set = new Set([1, 2, 3, 4, 5]);
    console.log(obj.hasOwnProperty("1")); // true
    console.log(obj.hasOwnProperty(1)); // true
    console.log(set.has("1")); // false
    console.log(set.has(1)); // true
}
console.log('---------------------');
// {
//     function Foo() {
//         getName = function () {
//             console.log(1);
//         };
//         return this;
//     }
//
//     Foo.getName = function () {
//         console.log(2);
//     };
//     Foo.prototype.getName = function () {
//         console.log(3);
//     };
//     var getName = function () {
//         console.log(4);
//     };
//
//     function getName() {
//         console.log(5);
//     }
//
//     Foo.getName(); // 2
//     getName(); // 4
//     Foo().getName(); // 1
//     getName(); // 1
//     new Foo.getName(); // 2
//     new Foo().getName(); // 3
//     new new Foo().getName(); // 3
// }
// console.log('---------------------');
//
