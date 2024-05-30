class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
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

class Queue {
    constructor() {
        this._first = null;
        this._last = null;
        this._size = 0;
    }

    enqueue(value) {
        let node = new Node(value);
        if (this._size === 0) {
            this._first = node, this._last = node;
        } else {
            this._last.next = node;
            this._last = node;
        }
        return ++this._size;
    }

    dequeue() {
        if (this._size === 0) return undefined;

        let first = this._first;
        if (this._size === 1) {
            this._first = null;
            this._last = null;
        } else {
            this._first = first.next;
            first.next = null;
        }
        this._size--;
        return first.value;
    }

    peek() {
        if (this._size === 0) return undefined;
        return this._first.value;
    }

    isEmpty() {
        return (this._size === 0);
    }

    size() {
        return this._size;
    }

    array() {
        let array = [];
        let current = this._first;
        while (current != null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}

let queue = new Queue();
console.log('ENQUEUE 22', queue.enqueue(22));
console.log('Array:', queue.array());
console.log('ENQUEUE 49', queue.enqueue(49));
console.log('Array:', queue.array());
console.log('ENQUEUE 3', queue.enqueue(3));
console.log('Array:', queue.array());
console.log('PEEK', queue.peek());
console.log('DEQUEUE', queue.dequeue());
console.log('Array:', queue.array());
console.log('ISEMPTY', queue.isEmpty());
console.log('SIZE', queue.size());
console.log('PEEK', queue.peek());
console.log('DEQUEUE', queue.dequeue());
console.log('Array:', queue.array());
console.log('PEEK', queue.peek());
console.log('ENQUEUE 11', queue.enqueue(11));
console.log('Array:', queue.array());
console.log('DEQUEUE', queue.dequeue());
console.log('Array:', queue.array());
console.log('DEQUEUE', queue.dequeue());
console.log('Array:', queue.array());
console.log('ISEMPTY', queue.isEmpty());
console.log('SIZE', queue.size());