class HashTable {
    constructor(size=53) {
        this._table = new Array(size);
    }

    get table() {
        return this._table;
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = Math.abs(key.charCodeAt(i) - 96);
            total = (total * PRIME + value) % this._table.length;
        }
        return total;
    }

    set(key, value) {
        // using separate chaining for collisions
        let hash = this._hash(key);
        if (!this._table[hash]) {
            this._table[hash] = [];
        }
        this._table[hash].push([key, value]);
        return hash;
    }

    get(key) {
        let hash = this._hash(key);
        if (this._table[hash]) {
            for (let i = 0; i < this._table[hash].length; i++) {
                let [foundKey, foundValue] = this._table[hash][i];
                if (key === foundKey) {
                    return foundValue;
                }
            }
        }
        return undefined;
    }

    keys() {
        let keys = [];
        for (let chain of this._table) {
            if (chain) {
                keys.push(...chain.map(pair => pair[0]));
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for (let chain of this._table) {
            if (chain) {
                values.push(...chain.map(pair => pair[1]));
            }
        }
        return values;
    }
}

let hashTable = new HashTable(7);
console.log('SET Auburn 98001', hashTable.set('Auburn', 98001));
console.log('GET Auburn', hashTable.get('Auburn'));
console.log('SET Federal Way 98001', hashTable.set('Federal Way', 98001));
console.log('GET Federal Way', hashTable.get('Federal Way'));
console.log('SET Bellevue 98005', hashTable.set('Bellevue', 98005));
console.log('GET Bellevue', hashTable.get('Bellevue'));
console.log('SET Maple Valley 98038', hashTable.set('Maple Valley', 98038));
console.log('GET Maple Valley', hashTable.get('Maple Valley'));
console.log('SET Medina 98039', hashTable.set('Medina', 98039));
console.log('GET Medina', hashTable.get('Medina'));
console.log('GET Table', hashTable.table);
console.log('GET Keys', hashTable.keys());
console.log('GET Values', hashTable.values());
