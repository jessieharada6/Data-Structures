class Node {
    constructor(value, priority) {
        this.priority = priority;
        this.value = value;
    }
}

// minBinaryHead
// based on priority

class PriorityQueue {
    constructor() {
        // insert here for speed
        // normally should be []
        this.values = [];
    }

    // Insert [55, 39, 41, 18, 27, 12, 33]
    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.values.push(node);
        return this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        // a node now
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }

        return this.values;
    }

    // Extract max - remove root
    // [55, 39, 41, 18, 27, 12, 33]
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();

        // for the last value, don't add to it
        if (this.values.length > 0) {
            this.values[0] = end;
            // bubble down
            this.sinkDown();
        }

        // [33, 39, 41, 18, 27, 12]
        return min;
    }

    // [33, 39, 41, 18, 27, 12]
    sinkDown() {
        let index = 0;
        const element = this.values[0];
        const length = this.values.length;

        while (true) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let leftChild, rightChild;
            let swap = null; // keep track of the index

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (element.priority > leftChild.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (swap === null && element.priority > rightChild.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

        // [41, 39, 33, 18, 27, 12]
    }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Common Cold", 5);
priorityQueue.enqueue("Gunshot wound", 1);
priorityQueue.enqueue("high fever", 4);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 3);







