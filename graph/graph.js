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

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1)) {
            // let index = this.adjacencyList[vertex1].indexOf(vertex2);
            // this.adjacencyList[vertex1].splice(index, 1);
            this.adjacencyList[vertex1] =
                this.adjacencyList[vertex1]
                    .filter(v => v !== vertex2);
        }
        if (this.adjacencyList.hasOwnProperty(vertex2)) {
            let index = this.adjacencyList[vertex2].indexOf(vertex1);
            this.adjacencyList[vertex2].splice(index, 1);
        }

    }

    // 220. Remove Vertex Solution
    removeVertex(vertex) {
        for (const elements of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, elements);
        }

        delete this.adjacencyList[vertex];

        // the guided solution
        // the one to be removed, get the array
        // while (this.adjacencyList[vertex].length) {
        //     // get each value in the array
        //     const adjacencyVertex = this.adjacencyList[vertex].pop();
        //     // then call the removeEdge function to 
        //     // remove the vertext in other arrays
        //     this.removeEdge(vertex, adjacencyVertex);
        // }
        // delete this.adjacencyList[vertex];

    }

}


let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Los Angeles");
graph.addVertex("Aspen");
graph.addVertex("Hongkong");
// graph.adjacencyList.Tokyo.push("SOMETHING")
graph.addEdge("Tokyo", "Los Angeles");
graph.addEdge("Los Angeles", "Aspen");
// graph.removeEdge("Tokyo", "Los Angeles");
graph.removeVertex("Tokyo");
console.log(graph)


