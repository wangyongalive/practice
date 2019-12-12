// 二叉搜索树
function BinarySearchTree() {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    let root = null;

    // node是根节点
    let insertNode = function (node, newNode) {
        if (node.key > newNode.key) { // 左
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    this.insert = function (key) {
        let newNode = new Node(key);
        if (root === null) { // 第一个节点
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    // 中序遍历
    let inOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            inOrderTraverseNode(node.left, cb);
            cb(node.key);
            inOrderTraverseNode(node.right, cb);
        }
    };
    this.inOrderTraverse = function (cb) {
        inOrderTraverseNode(root, cb);
    };

    // 先序遍历
    let preOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            cb(node.key);
            preOrderTraverseNode(node.left, cb);
            preOrderTraverseNode(node.right, cb);
        }
    };
    this.preOrderTraverse = function (cb) {
        preOrderTraverseNode(root, cb);
    };

    // 后序遍历
    let postOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            postOrderTraverseNode(node.left, cb);
            postOrderTraverseNode(node.right, cb);
            cb(node.key);
        }
    };
    this.postOrderTraverse = function (cb) {
        postOrderTraverseNode(root, cb);
    };


    // 寻找最小值
    let minNode = function (node) {
        if (node) {
            // 遍历左子树
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    this.min = function () {
        return minNode(root);
    };

    // 寻找最大值
    let maxNode = function (node) {
        if (node) {
            // 遍历右子树
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.max = function () {
        return maxNode(root);
    };

    // 寻找特定值
    let searchNode = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };
    this.search = function (key) {
        return searchNode(root, key);
    };
};

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.inOrderTraverse((key) => console.log(`key:${key}`));
tree.max();
tree.min();
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
