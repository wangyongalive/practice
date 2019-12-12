let Set = require('./Set');

function union(setA, setB) {
    let unionSet = new Set();
    let values = setA.values();
    for (let value of values) {
        unionSet.add(value);
    }
    values = setB.values();
    for (let value of values) {
        unionSet.add(value);
    }
    return unionSet;
};
let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

let setB = new Set();
setB.add(5);
setB.add(6);
setB.add(3);
setB.add(4);
console.log(union(setA, setB).values());

