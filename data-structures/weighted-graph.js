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

    get length() {
        return this._values.length;
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

class WeightedGraph {
    constructor() {
        this._graph = {};
    }

    get graph() {
        return this._graph;
    }

    addVertex(v) {
        if (!this._graph[v]) {
            this._graph[v] = [];
            return true;
        }
        return false;
    }

    addEdge(a, b, weight) {
        if (!this._graph[a] || !this._graph[b]) return false;
        this._graph[a].push({value: b, weight: weight});
        this._graph[b].push({value: a, weight: weight});
        return true;
    }

    shortestPath(start, end) {
        let distances = {};
        let priorityQueue = new PriorityQueue();
        let previous = {};
        let path = [];
        let smallest;
        for (let key in this._graph) {
            if (start === key) {
                distances[key] = 0;
                priorityQueue.enqueue(key, 0);
            } else {
                distances[key] = Infinity;
                priorityQueue.enqueue(key, Infinity);
            }
            previous[key] = null;
        }
        while(priorityQueue.length > 0) {
            smallest = priorityQueue.dequeue().value;
            if (smallest === end) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            for (let n of this._graph[smallest]) {
                let nweight = n.weight;
                let nvalue = n.value;
                let candidate = nweight + distances[smallest];
                if (candidate < distances[nvalue]) {
                    distances[nvalue] = candidate;
                    previous[nvalue] = smallest;
                    priorityQueue.enqueue(nvalue, candidate);
                }
            }
        }
        return path.concat(start).reverse();
    }
}

let graph = new WeightedGraph();
console.log('ADD VERTEX A', graph.addVertex('A'));
console.log('ADD VERTEX B', graph.addVertex('B'));
console.log('ADD VERTEX C', graph.addVertex('C'));
console.log('ADD VERTEX D', graph.addVertex('D'));
console.log('ADD VERTEX E', graph.addVertex('E'));
console.log('ADD VERTEX F', graph.addVertex('F'));
console.log('ADD EDGE A B 4', graph.addEdge('A', 'B', 4));
console.log('ADD EDGE A C 2', graph.addEdge('A', 'C', 2));
console.log('ADD EDGE B E 3', graph.addEdge('B', 'E', 3));
console.log('ADD EDGE C D 2', graph.addEdge('C', 'D', 2));
console.log('ADD EDGE C F 4', graph.addEdge('C', 'F', 4));
console.log('ADD EDGE D E 3', graph.addEdge('D', 'E', 3));
console.log('ADD EDGE D F 1', graph.addEdge('D', 'F', 1));
console.log('ADD EDGE E F 1', graph.addEdge('E', 'F', 1));
console.log('GRAPH', graph.graph);
console.log('SHORTEST PATH', graph.shortestPath('A', 'E'));