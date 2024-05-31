class Node {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }

    get value() {
        return this._value;
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

    }

    max() {

    }

    height() {

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