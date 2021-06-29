class Node {
    constructor(value) {
        this.value = value;
        // pointer, point to a Node obj or null
        this.next = null;
    }
}

class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to the end: push 
    enqueue(val) {
        const node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node; // move the pointer
        }

        return this.size++;
    }

    // remove from beginning: shift
    dequeue() {
        if (!this.first) return null;

        let temp = this.first;
        // 1 node left
        if (this.first === this.last) {
            this.last = null;
        }
        // so if one node left, this.first.next is also null
        // first and last pointer overlap
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}

const queue = new Queues();
queue.enqueue(3);
queue.enqueue(4);