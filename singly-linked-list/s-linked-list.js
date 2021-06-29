class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add to end
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove end
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // return popped value
    }

    // remove beginning
    shift() {
        if (!this.head) return undefined;

        let prevHead = this.head;
        this.head = prevHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return prevHead;
    }

    // add to the beginning
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return null;

        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            counter++;
            current = current.next;
        }

        return current;
    }

    set(index, val) {
        let foundVal = this.get(index);

        if (foundVal) {
            foundVal.val = val;
            return true;
        }

        return false;
    }

    reverse() {
        // swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;

            prev = node;
            node = next;
        }

        return this;
    }
}

const list = new SinglyLinkedList();
list.push("Hi");
list.push("You");
list.push("!");
// list.pop();

