class Node {
    constructor(value) {
        // actual value and its next
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        // first and last are like pointers
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push to the beginning = unshift
    // 1
    // 2 1
    // 3 2 1
    push(val) {
        const node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            node.next = temp;
        }

        return this.size++;
    }

    // shift
    pop() {
        if (!this.first) return null;

        // when there is only 1 node
        // this.last should be null, not node
        // must do it beforehand
        if (this.first === this.last) {
            this.last = null;
        }

        let temp = this.first;
        // because of this.size === 1 case
        // now the temp.next also points to null if size is 1
        this.first = temp.next; //this.first.next
        this.size--;

        return temp.value;
    }
}

const stack = new Stack();
stack.push(1);
// stack.push(2);
// stack.push(3);