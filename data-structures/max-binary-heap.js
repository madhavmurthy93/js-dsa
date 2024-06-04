class MaxBinaryHeap {
    constructor() {
        this._values = [];
    }

    get values() {
        return this._values;
    }

    insert(value) {
        let index = this._values.push(value) - 1;
        let parentIndex = parseInt((index - 1) / 2);
        let parent = this._values[parentIndex];
        while(value > parent) {
            this._values[parentIndex] = value;
            this._values[index] = parent;
            index = parentIndex;
            parentIndex = parseInt((index - 1) / 2);
            parent = this._values[parentIndex];
        }
        return index;
    }

    getMax() {
        if (this._values.length === 0) return undefined;
        return this._values[0];
    }

    extractMax() {
        if (this._values.length === 0) return undefined;
        let max = this._values[0];
        let end = this._values.pop();
        let length = this._values.length;
        if (length > 0) {
            this._values[0] = end;
            bubbleDownIterative(this._values, 0);
        }
        return max;

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
                    if (leftChild > element) {
                        swap = leftChildIndex;
                    }
                }

                if (rightChildIndex < length) {
                    rightChild = values[rightChildIndex];
                    if (swap && rightChild > leftChild || !swap && rightChild > element) {
                        swap = rightChildIndex;
                    }
                }

                if (!swap) break;
                values[index] = values[swap];
                values[swap] = element;
                index = swap;
            }
        }   
        
        function bubbleDownRecursive(values, index) {
            let element = values[index];
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild, swap;
            
            if (leftChildIndex < length) {
                leftChild = values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = values[rightChildIndex];
                if (swap && rightChild > leftChild || !swap && rightChild > element) {
                    swap = rightChildIndex;
                }
            }

            if (!swap) return;
            values[index] = values[swap];
            values[swap] = element;
            bubbleDownRecursive(values, swap);
        }
    }
}

let maxHeap = new MaxBinaryHeap();
console.log('INSERT 223', maxHeap.insert(223));
console.log('INSERT 4', maxHeap.insert(4));
console.log('INSERT 1', maxHeap.insert(1));
console.log('INSERT 450', maxHeap.insert(450));
console.log('VALUES', maxHeap.values);
console.log('MAX', maxHeap.getMax());
console.log('INSERT 562', maxHeap.insert(562));
console.log('INSERT 65', maxHeap.insert(65));
console.log('INSERT 3042', maxHeap.insert(3042));
console.log('VALUES', maxHeap.values);
console.log('MAX', maxHeap.getMax());
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
console.log('EXTRACT MAX', maxHeap.extractMax());
console.log('VALUES', maxHeap.values);
