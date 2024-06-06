class Graph {
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

    removeVertex(v) {
        if (!this._graph[v]) return false;
        let edges = this._graph[v];
        for (let e of edges) {
            this.removeEdge(e, v);
        }
        delete this._graph[v];
        return true;
    }

    addEdge(a, b) {
        if (!this._graph[a] || !this._graph[b]) return false;
        this._graph[a].push(b);
        this._graph[b].push(a);
        return true;
    }

    removeEdge(a, b) {
        if (!this._graph[a] || !this._graph[b]) return false;
        this._graph[a] = this._graph[a].filter(item => item != b);
        this._graph[b] = this._graph[b].filter(item => item != a);
        return true;
    }
}

let graph = new Graph();
console.log('ADD VERTEX Madhav', graph.addVertex('Madhav'));
console.log('ADD VERTEX Rupini', graph.addVertex('Rupini'));
console.log('ADD VERTEX Giridhar', graph.addVertex('Giridhar'));
console.log('ADD VERTEX Kritatma', graph.addVertex('Kritatma'));
console.log('ADD VERTEX Arnab', graph.addVertex('Arnab'));
console.log('ADD VERTEX Shashank', graph.addVertex('Shashank'));
console.log('ADD VERTEX Vibha', graph.addVertex('Vibha'));
console.log('ADD VERTEX Arjun', graph.addVertex('Arjun'));
console.log('GRAPH', graph.graph);
console.log('ADD EDGE Madhav Rupini', graph.addEdge('Madhav', 'Rupini'));
console.log('ADD EDGE Madhav Giridhar', graph.addEdge('Madhav', 'Giridhar'));
console.log('ADD EDGE Giridhar Arnab', graph.addEdge('Giridhar', 'Arnab'));
console.log('ADD EDGE Madhav Kritatma', graph.addEdge('Madhav', 'Kritatma'));
console.log('ADD EDGE Giridhar Kritatma', graph.addEdge('Giridhar', 'Kritatma'));
console.log('ADD EDGE Rupini Shashank', graph.addEdge('Rupini', 'Shashank'));
console.log('ADD EDGE Madhav Shashank', graph.addEdge('Madhav', 'Shashank'));
console.log('ADD EDGE Vibha Shashank', graph.addEdge('Vibha', 'Shashank'));
console.log('ADD EDGE Rupini Vibha', graph.addEdge('Rupini', 'Vibha'));
console.log('ADD EDGE Madhav Vibha', graph.addEdge('Madhav', 'Vibha'));
console.log('ADD EDGE Rupini Arjun', graph.addEdge('Rupini', 'Arjun'));
console.log('ADD EDGE Arjun Madhav', graph.addEdge('Arjun', 'Madhav'));
console.log('GRAPH', graph.graph);
console.log('REMOVE EDGE Madhav Kritatma', graph.removeEdge('Madhav', 'Kritatma'));
console.log('REMOVE EDGE Madhav Arjun', graph.removeEdge('Madhav', 'Arjun'));
console.log('GRAPH', graph.graph);
console.log('REMOVE VERTEX Shashank', graph.removeVertex('Shashank'));
console.log('GRAPH', graph.graph);