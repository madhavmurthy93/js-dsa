class Queue {
    constructor() {
        this._array = [];
    }

    enqueue(value) {
        return this._array.push(value);
    }

    dequeue() {
        return this._array.shift();
    }

    peek() {
        if (this._array.length === 0) return undefined;
        return this._array[0];
    }

    isEmpty() {
        return (this._array.length === 0);
    }

    size() {
        return this._array.length;
    }

    array() {
        return this._array;
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