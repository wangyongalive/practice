function Graph() {
    let vertices = []; // 保存顶点名
    let adjList = new Map(); // 存储邻接表  使用Map代替字典

    // 添加顶点
    this.addVertex = function (v) {
        vertices.push(v);   // 将顶点添加到顶点列表中
        adjList.set(v, []); // 顶点v对应的值为空数组
    };

    // 添加边
    this.addEdge = function (v, w) {
        // 如果你想实现一个有向图  其中一行就可以了
        // 如果你想实现一个无向图  需要两条语句
        adjList.get(v).push(w); // 顶点v到顶点w的边
        adjList.get(w).push(v); // 顶点w到顶点v的边
    };

    this.toString = function () {
        let s = '';
        for (let i = 0; i < vertices.length; i++) { // 遍历顶点
            s += vertices[i] + ' -> ';
            let neighbors = adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };
}


var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());
