class MaxBinaryHeap {
    constructor() {
        // insert here for speed
        // normally should be []
        this.values = [];
    }

    // // Insert [55, 39, 41, 18, 27, 12, 33]
    // insert(element) {
    //     this.values.push(element);
    //     return this.bubbleUp();
    // }

    // bubbleUp() {
    //     let index = this.values.length - 1;
    //     let element = this.values[index];

    //     while (index > 0) {
    //         let parentIndex = Math.floor((index - 1) / 2);
    //         let parent = this.values[parentIndex];

    //         // if minBinaryHead, just change it to >
    //         if (element <= parent) break;

    //         this.values[parentIndex] = element;
    //         this.values[index] = parent;
    //         index = parentIndex;
    //     }

    //     return this.values;
    // }

    // Insert [55, 39, 41, 18, 27, 12, 33]
    insert(element) {
        this.values.push(element);
        return this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element <= parent) {
                break;
            }

            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
        return this.values;
    }

    // Extract max - remove root
    // [55, 39, 41, 18, 27, 12, 33]
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();

        // when the last value is removed, don't add to it
        if (this.values.length > 0) {
            this.values[0] = end;
            //bubble down
            this.sinkDown();
        }

        // [33, 39, 41, 18, 27, 12]
        return max;
    }

    // [33, 39, 41, 18, 27, 12]
    sinkDown() {
        let index = 0;
        const element = this.values[index]; // this.values[0]
        const length = this.values.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;  // keep track of the index

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (element < leftChild) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && element < rightChild) ||
                    (swap !== null && leftChild < rightChild)) {
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

    // my initial try
    // sinkDown() {
    //     let index = 0;
    //     const element = this.values[0];
    //     const length = this.values.length;

    //     while (true) {
    //         let leftChildIndex = index * 2 + 1;
    //         let rightChildIndex = index * 2 + 2;
    //         let leftChild = this.values[leftChildIndex];
    //         let rightChild = this.values[rightChildIndex];

    //         if (element < leftChild && element < rightChild) {
    //             let max = Math.max(leftChild, rightChild);
    //             if (leftChild < rightChild) {
    //                 let temp = element;
    //                 this.values[index] = max;
    //                 this.values[rightChildIndex] = temp;
    //                 index = rightChildIndex;
    //             } else {
    //                 let temp = element;
    //                 this.values[index] = max;
    //                 this.values[leftChildIndex] = temp;
    //                 index = rightChildIndex;
    //             }
    //         } else if (element < leftChild) {
    //             let temp = element;
    //             this.values[index] = leftChild;
    //             this.values[leftChildIndex] = temp;
    //             index = rightChildIndex;
    //         } else if (element < rightChild) {
    //             let temp = element;
    //             this.values[index] = rightChild;
    //             this.values[leftChildIndex] = temp;
    //             index = rightChildIndex;
    //         }

    //         if (index > length || leftChildIndex > length || rightChild > length) break;
    //     }

    //     // [41, 39, 33, 18, 27, 12]

    // }
}

let maxBinaryHeap = new MaxBinaryHeap();
// 41, 39, 33, 18, 27, 12  --- 55
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
console.log(maxBinaryHeap.insert(55));

// 55, 39, 41, 18, 27, 12
console.log(maxBinaryHeap.extractMax());





