class Node {
    constructor(value, priority) {
        this._value = value;
        this._priority = priority;
    }

    get value() {
        return this._value;
    }

    get priority() {
        return this._priority;
    }
}

class PriorityQueue {
    constructor() {
        this._values = [];
    }

    get values() {
        return this._values;
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        let index = this._values.push(node) - 1;
        let parentIndex = parseInt((index - 1) / 2);
        let parent = this._values[parentIndex];
        while(node.priority < parent.priority) {
            this._values[parentIndex] = node;
            this._values[index] = parent;
            index = parentIndex;
            parentIndex = parseInt((index - 1) / 2);
            parent = this._values[parentIndex];
        }
        return index;
    }

    dequeue() {
        if (this._values.length === 0) return undefined;
        let min = this._values[0];
        let end = this._values.pop();
        let length = this._values.length;
        if (length > 0) {
            this._values[0] = end;
            bubbleDownIterative(this._values, 0);
        }
        return min;

        function bubbleDownIterative(values) {
            let index = 0;
            let element = values[0]; 
            let length = values.length;
            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let leftChild, rightChild, swap;

                if (leftChildIndex < length) {
                    leftChild = values[leftChildIndex];
                    if (leftChild.priority < element.priority) {
                        swap = leftChildIndex;
                    }
                }

                if (rightChildIndex < length) {
                    rightChild = values[rightChildIndex];
                    if (swap && rightChild.priority < leftChild.priority 
                        || !swap && rightChild.priority < element.priority) {
                        swap = rightChildIndex;
                    }
                }

                if (!swap) break;
                values[index] = values[swap];
                values[swap] = element;
                index = swap;
            }
        }   
    }

    getPriority() {
        if (this._values.length === 0) return undefined;
        return this._values[0];
    }
}

let priorityQueue = new PriorityQueue();
console.log('INSERT Cold priority 20', priorityQueue.enqueue('Cold', 20));
console.log('INSERT Gunshot leg priority 5', priorityQueue.enqueue('Gunshot leg', 5));
console.log('INSERT High fever priority 15', priorityQueue.enqueue('High fever', 15));
console.log('INSERT Heart attack priority 0', priorityQueue.enqueue('Heart attack', 0));
console.log('VALUES', priorityQueue.values);
console.log('PRIORITY', priorityQueue.getPriority());
console.log('INSERT Brain haemmorage priority 0', priorityQueue.enqueue('Brain haemmorage', 0));
console.log('INSERT Broken hand priority 10', priorityQueue.enqueue('Broken hand', 10));
console.log('INSERT Shattered elbow priority 3', priorityQueue.enqueue('Shattered elbow', 3));
console.log('VALUES', priorityQueue.values);
console.log('PRIORITY', priorityQueue.getPriority());
console.log('DEQUEUE', priorityQueue.dequeue());
console.log('VALUES', priorityQueue.values);
console.log('PRIORITY', priorityQueue.getPriority());
console.log('DEQUEUE', priorityQueue.dequeue());
console.log('VALUES', priorityQueue.values);
console.log('PRIORITY', priorityQueue.getPriority());
console.log('DEQUEUE', priorityQueue.dequeue());
console.log('VALUES', priorityQueue.values);
console.log('PRIORITY', priorityQueue.getPriority());