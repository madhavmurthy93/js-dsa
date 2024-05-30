class Stack {
    constructor() {
        this._array = [];
    }

    push(value) {
        return this._array.push(value);
    }

    pop() {
        return this._array.pop();
    }

    peek() {
        if (this._array.length === 0) return undefined;
        return this._array[this._array.length - 1];
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