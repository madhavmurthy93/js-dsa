class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
        this._prev = null;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

    get next() {
        return this._next;
    }

    set next(next) {
        this._next = next;
    }

    get prev() {
        return this._prev;
    }

    set prev(prev) {
        this._prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    get length() {
        return this._length;
    }

    push(value) {
        let node = new Node(value);
        if (this._length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node; 
            node.prev = this._tail;
            this._tail = node; 
        }
        this._length++;
        return this;
    }

    pop() {
        if (this._length === 0) return undefined;
        let node = this._tail;
        if (this._length === 1) {
            this._head = null;
            this._tail = null;
        } else {
            this._tail = node.prev;
            node.prev = null;
            this._tail.next = null;
        }
        this._length--;
        return node;
    }

    unshift(value) {
        let node = new Node(value);
        if (this._length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            let next = this._head;
            this._head = node;
            node.next = next;
            next.prev = node;
        }
        this._length++;
        return this;
    }

    shift() {
        if (this._length === 0) return undefined;
        if (this._length === 1) {
            let node = this._head;
            this._head = null;
            this._head = null;
            this._length--;
            return node;
        }
        let node = this._head;
        this._head = node.next;
        node.next = null;
        this._head.prev = null;
        this._length--;
        return node;
    }

    get(index) {
        if (index < 0 || index >= this._length) return undefined;
        if (index < parseInt(this._length / 2)) {
            let current = this._head;
            let count = 0;
            while (count < index) {
                current = current.next;
                count++
            }
            return current; 
        } else {
            let current = this._tail;
            let count = this._length - 1;
            while (count > index) {
                current = current.prev;
                count--;
            } 
            return current;
        }
    }

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this._length) {
            return false;
        } else if (index === 0) {
            this.unshift(value);
            return true;
        }  else if (index === this._length) {
            this.push(value);
            return true;
        } else {
            let node = new Node(value);
            let prev = this.get(index - 1);
            let next = prev.next;

            prev.next = node, node.prev = prev; 
            node.next = next, next.prev = node;
            this._length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index >= this._length) {
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this._length - 1) {
            return this.pop();
        } else {
            let current = this.get(index);
            let prev = current.prev;
            let next = current.next;
            
            prev.next = next, next.prev = prev;
            current.prev = null, current.next = null;
            this._length--;
            return current;        
        }
    }

    reverse() {
        let current = this._head;
        this._head = this._tail;
        this._tail = current;
        let prev = null;
        let next;
        while (current != null) {
            next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        return this;
    }

    array() {
        let current = this._head;
        let values = [];
        while (current != null) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

// Manual testing
let ll = new DoublyLinkedList();

console.log('PUSH 122', ll.push(122));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 134', ll.push(134));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 2030', ll.push(2030));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 4', ll.push(4));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 100', ll.push(100));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 25', ll.push(25));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 84', ll.push(84));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('SHIFT', ll.shift());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('SHIFT', ll.shift());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('SHIFT', ll.shift());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 1203', ll.push(1203));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('UNSHIFT 84', ll.unshift(84));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 13', ll.push(13));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('SHIFT', ll.shift());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 1203', ll.push(1203));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('UNSHIFT 84', ll.unshift(84));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('POP', ll.pop());
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 13', ll.push(13));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('UNSHIFT 485', ll.unshift(485));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('PUSH 356', ll.push(356));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('GET 0', ll.get(0));
console.log('GET 1', ll.get(1));
console.log('GET 2', ll.get(2));
console.log('GET 3', ll.get(3));
console.log('GET -1', ll.get(-1));
console.log('SET at 1 value 22', ll.set(1, 22));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('SET at 7 value 102', ll.set(7, 102));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('INSERT at 2 value 30', ll.insert(2, 30));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('INSERT at 4 value 873', ll.insert(4, 873));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('INSERT at 0 value 715', ll.insert(0, 715));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('INSERT at -1 value 349', ll.insert(-1, 349));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('REMOVE at 3', ll.remove(3));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('REMOVE at 0', ll.remove(0));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('REMOVE at -1', ll.remove(-1));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('REMOVE at 9', ll.remove(9));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('REMOVE at 4', ll.remove(4));
console.log('Length:', ll.length, 'Array:', ll.array());
console.log('REVERSE', ll.reverse());
console.log('Length:', ll.length, 'Array:', ll.array());