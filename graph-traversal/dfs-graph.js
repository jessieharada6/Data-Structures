// undirected graph - adj
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // avoid overwriting
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1)) {
            this.adjacencyList[vertex1].push(vertex2);
        }

        if (this.adjacencyList.hasOwnProperty(vertex2)) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    // ///////// Traversal///////////////
    // DFS: visit vertext and its neighbors in the array, mark visited as true
    dfsRecursive(vertex) {
        let result = [];
        let visited = {};
        // preserve this. before calling in the helper funciton
        const adjacencyList = this.adjacencyList;
        dfs(vertex);
        return result;

        function dfs(vertex) {
            if (!vertex) return;
            result.push(vertex);
            visited[vertex] = true;
            for (const neighbour of adjacencyList[vertex]) {
                if (!visited[neighbour]) {
                    dfs(neighbour);
                }
            }
        }
    }

    // use stack structure
    // so it goes to the bottom of the list, push the values from bottom up
    dfsIterative(vertex) {
        let result = [];
        let visited = {};
        let stack = [vertex];
        const adjacencyList = this.adjacencyList;

        while (stack.length) {
            let v = stack.pop();

            result.push(v);
            visited[vertex] = true;

            adjacencyList[v].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }


    // BFS: visit neighbours at a given depth (same height)
    // before going further down
    // use queue structure instead, so the neighbours at the same level are added first
    bfs(vertex) {
        let result = [];
        let visited = {};
        let queue = [vertex];
        const adjacencyList = this.adjacencyList;

        while (queue.length) {
            let v = queue.shift();

            result.push(v);
            visited[vertex] = true;

            adjacencyList[v].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }
}


let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph)
let list = graph.dfsRecursive("A");
console.log(list);
let list1 = graph.depthFirstRecursive("A");
console.log(list1);
let list2 = graph.dfsIterative("A")
console.log(list2);
let list3 = graph.bfs("A");
console.log(list3);
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

