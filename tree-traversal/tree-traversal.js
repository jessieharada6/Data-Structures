// 1. Breadth first search
//            10
//       6            15
//    3     8             20
// queue: [6, 15] 
// visited: [10]

// check on the last visited node, is there a left, is there a right?
// queue: [15, 3, 8]
// visited: [10, 6]

// queue: [3, 8, 20]
// visited: [10, 6, 15]

// queue: [8, 20]
// visited: [10, 6, 15, 2]

// queue: [20]
// visited: [10, 6, 15, 2, 8]

// queue: []
// visited: [10, 6, 15, 2, 8, 20]

// now queue is empty, we know we are done

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //       10
    //   5        13
    // 2   7   11   16

    // BFS
    breadthFirstSearch() {
        let queue = [];
        let visited = [];
        let current = this.root;

        queue.push(current);

        while (queue.length) { //  !== 0 as !!0 is falsy
            // use what we have in queue as the current node
            current = queue.shift();

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }

            // return value only
            visited.push(current.value);
        }

        return visited;
    }

    //        10
    //    6        15
    // 3     8         20

    // root,  left  , right
    // [10, 6, 3, 8, 15, 20]

    // DFS - pre-order
    dfsPreOrder() {
        let data = [];
        let current = this.root;

        // helper function
        function traverse(node) {
            data.push(node.value);
            // 10, 6, 3, null (at this point, see node.right)
            // node.left will eventually be false
            if (node.left) traverse(node.left);

            // keep all the right on call stack
            // until left is done, then execute
            // 8, 15, 20
            // node.right will eventually be false
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }

    //        10
    //    6        15
    // 3     8         20

    //  left        right       root
    // [3, 8, 6,    20, 15,      10]

    // DFS - post-order
    dfsPostOrder() {
        let data = [];
        let current = this.root;

        // helper function
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);
        return data;
    }

    //        10
    //    6        15
    // 3     8         20

    // left side    root     right side
    // [3, 6, 8,    10,      15, 20]

    // DFS - in-order
    dfsInOrder() {
        let data = [];
        let current = this.root;

        // helper function
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }


    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            // alternatively, add the frequency to the node object as a counter
            if (node.value === current.value) {
                return undefined;
            }

            if (node.value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    } q
}

var tree = new BinarySearchTree();
// bfs
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(2);
// tree.insert(7);
// tree.insert(11);
// tree.insert(16);

//pre-order
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.breadthFirstSearch();
tree.dfsPreOrder();
tree.dfsPostOrder();
tree.dfsInOrder();



