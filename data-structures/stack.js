class Node {
    constructor(value) {
        this._value = value;
        this.next = null;
    }

    get value() {
        return this._value;
    }

    get next() {
        return this._next;
    }

    set next(next) {
        this._next = next;
    }
}

class Stack {
    constructor() {
        this._top = null;
        this._size = 0;
    }

    push(value) {
        let node = new Node(value);
        if (this._size === 0) {
            this._top = node;
        } else {
            node.next = this._top;
            this._top = node;
        }
        return ++this._size;
    }

    pop() {
        if (this._size === 0) return undefined;
        
        let node = this._top;
        if (this._size === 1) {
            this._top = null;
        } else {
            this._top = node.next;
            node.next = null;
        }
        this._size--;
        return node.value;
    }

    peek() {
        if (this._size === 0) return undefined;
        return this._top.value;
    }

    isEmpty() {
        return (this._size === 0);
    }

    size() {
        return this._size;
    }

    array() {
        let array = [];
        let current = this._top;
        while (current != null) {
            array.unshift(current.value);
            current = current.next;
        }
        return array;
    }
}

let stack = new Stack();
console.log('PUSH 22', stack.push(22));
console.log('Array:', stack.array());
console.log('PUSH 49', stack.push(49));
console.log('Array:', stack.array());
console.log('PUSH 3', stack.push(3));
console.log('Array:', stack.array());
console.log('PEEK', stack.peek());
console.log('POP', stack.pop());
console.log('Array:', stack.array());
console.log('ISEMPTY', stack.isEmpty());
console.log('SIZE', stack.size());
console.log('POP', stack.pop());
console.log('Array:', stack.array());
console.log('PEEK', stack.peek());
console.log('PUSH 11', stack.push(11));
console.log('Array:', stack.array());
console.log('POP', stack.pop());
console.log('Array:', stack.array());
console.log('POP', stack.pop());
console.log('Array:', stack.array());
console.log('ISEMPTY', stack.isEmpty());
console.log('SIZE', stack.size());