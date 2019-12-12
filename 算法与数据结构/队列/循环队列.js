let Queue = require('./Queue');

//  循环队列——击鼓传花
function hotPotato(nameList, num) {
    let queue = new Queue();
    // 入队
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // 将队首元素移动到队尾
        }
        eliminated = queue.dequeue(); // 出队
        console.log(eliminated + ' was eliminated from the Hot Potato game.');
    }
    return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);
