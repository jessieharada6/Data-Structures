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


        // while (current.left && current.right) {
        //     if (node.value < current.value) {
        //         current = current.left;
        //     } else {
        //         current = current.right;

        //     }
        // }

        // if (node.value < current.value) {
        //     current.left = node;
        // }
        // else {
        //     current.right = node;
        // }
        // }

        // return this;
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        let found = false;

        // while there is something to loop over
        // and it is not found yet
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
                // return true;
            }
        }


        return found ? current : false;
        // return false;
    }
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);