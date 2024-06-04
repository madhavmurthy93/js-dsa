class Node {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get left() {
        return this._left;
    }

    set left(left) {
        this._left = left;
    }

    get right() {
        return this._right;
    }

    set right(right) {
        this._right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    insert(value) {
        if (this._root === null) {
            this._root = new Node(value);
            return true;
        } else {
            return helperIterative(this._root, value);
        }

        function helperRecursive(node, value) {
            if (value === node.value) {
                return false;
            } else if (value < node.value && node.left === null) {
                node.left = new Node(value);
                return true;
            } else if (value > node.value && node.right === null) {
                node.right = new Node(value);
                return true;
            } else if (value < node.value) {
                return helperRecursive(node.left, value);
            } else {
                return helperRecursive(node.right, value);
            }
        }

        function helperIterative(node, value) {
            let current = node;
            while (true) {
                if (value === current.value) {
                    return false;
                } else if (value < current.value && current.left === null) {
                    current.left = new Node(value);
                    return true;
                } else if (value > current.value && current.right === null) {
                    current.right = new Node(value);
                    return true;
                } else if (value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }
    }

    delete(value) {
        let [node, isDeleted] = helperRecursive(this._root, value);
        this._root = node;
        return isDeleted;

        function helperRecursive(node, value) {
            if (node === null) {
                return [node, false];
            } else if (value < node.value) {
                let [left, isDeleted] = helperRecursive(node.left, value);
                node.left = left;
                return [node, isDeleted];
            } else if (value > node.value) {
                let [right, isDeleted] = helperRecursive(node.right, value);
                node.right = right;
                return [node, isDeleted];
            } else {
                if (node.left === null) {
                    return [node.right, true];
                } else if (node. right === null) {
                    return [node.left, true];
                } else {
                    let temp = minNode(node.right);
                    node.value = temp.value;
                    let [right, isDeleted] = helperRecursive(node.right, temp.value);
                    node.right = right;
                    return [node, true];
                }
            }  
        }

        function minNode(node) {
            let current = node;
            while (current.left != null) {
                current = current.left;
            }
            return current;
        }
    }

    find(value) {
        return helperIterative(this._root, value);

        function helperRecursive(node, value) {
            if (node === null) {  
                return undefined;
            } else if (value === node.value) {
                return node;
            } else if (value < node.value) {
                return helperRecursive(node.left, value);
            } else {
                return helperRecursive(node.right, value);
            }
        }

        function helperIterative(node, value) {
            let current = node;
            while(current != null) {
                if (value === current.value) {
                    return current;
                } else if (value < current.value) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
            return undefined;
        }
    }

    min() {
        if (this._root === null) return undefined;
        let current = this._root;
        while (current.left != null) {
            current = current.left;
        }
        return current.value;
    }

    max() {
        if (this._root === null) return undefined;
        let current = this._root;
        while (current.right != null) {
            current = current.right;
        }
        return current.value;
    }

    height() {
        return helperIterative(this._root);

        function helperRecursive(node) {
            if (node === null) return -1;
            return 1 + Math.max(helperRecursive(node.left), helperRecursive(node.right));
        }

        function helperIterative(node) {
            if (node === null) return -1;
            let queue = [[node, 0]];
            let height = 0;
            while (queue.length > 0) {
                let [node, depth] = queue.shift();
                height = Math.max(height, depth);
                if (node.left) queue.push([node.left, depth + 1]);
                if (node.right) queue.push([node.right, depth + 1]);
            }
            return height;
        }
    }

    bfs() {
        return helperIterative(this._root);

        function helperIterative(node) {
            if (node === null) return [];
            let queue = [node];
            let result = [];
            while (queue.length > 0) {
                let queueNode = queue.shift();
                result.push(queueNode.value);
                if (queueNode.left) queue.push(queueNode.left);
                if (queueNode.right) queue.push(queueNode.right);
            }
            return result;
        }
    }

    dfsPreorder() {
        let result = [];
        helperRecursive(this._root, result);
        return result;

        function helperRecursive(node, result) {
            if (node === null) return;

            result.push(node.value);
            helperRecursive(node.left, result);
            helperRecursive(node.right, result);
        }
    }

    dfsPostorder() {
        let result = [];
        helperRecursive(this._root, result);
        return result;

        function helperRecursive(node, result) {
            if (node === null) return;

            helperRecursive(node.left, result);
            helperRecursive(node.right, result);
            result.push(node.value);
        }

    }

    dfsInorder() {
        let result = [];
        helperRecursive(this._root, result);
        return result;

        function helperRecursive(node, result) {
            if (node === null) return;

            helperRecursive(node.left, result);
            result.push(node.value);
            helperRecursive(node.right, result);
        }
    }

    get root() {
        return this._root;
    }

}

let bst = new BinarySearchTree();
console.log('INSERT 223', bst.insert(223));
console.log('INSERT 4', bst.insert(4));
console.log('INSERT 562', bst.insert(562));
console.log('INSERT 3042', bst.insert(3042));
console.log('INSERT 223', bst.insert(223));
console.log('INSERT 65', bst.insert(65));
console.log('INSERT 1', bst.insert(1));
console.log('INSERT 450', bst.insert(450));
console.log('FIND 450', bst.find(450));
console.log('FIND 223', bst.find(223));
console.log('FIND 65', bst.find(65));
console.log('FIND 4', bst.find(4));
console.log('FIND 34', bst.find(34));
console.log('MIN', bst.min());
console.log('MAX', bst.max());
console.log('HEIGHT', bst.height());
console.log('BFS', bst.bfs());
console.log('DFS PreOrder', bst.dfsPreorder());
console.log('DFS PostOrder', bst.dfsPostorder());
console.log('DFS InOrder', bst.dfsInorder());
console.log('DELETE 450', bst.delete(450));
console.log('TREE', bst.root);
console.log('DELETE 562', bst.delete(562));
console.log('TREE', bst.root);
console.log('DELETE 4', bst.delete(4));
console.log('TREE', bst.root);
console.log('DELETE 1', bst.delete(1));
console.log('TREE', bst.root);
console.log('DELETE 223', bst.delete(223));
console.log('TREE', bst.root);