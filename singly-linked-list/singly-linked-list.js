// piece of data - val
//reference to next node - next

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

    // push to the end of the list
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            // head and tail point to the same value
            this.head = newNode;
            // this.tail = this.head;
            this.tail = newNode;
        } else {
            // this.tail.next = val passed in new Node = val.next
            this.tail.next = newNode; // current tail . next is new Node
            this.tail = newNode; // now the new tail also points to new Node
        }
        this.length++;
        // return the list
        return this;
    }

    // traverse() {
    //     var current = this.head;
    //     // when current.next is null, it jumps out of loop
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    // pop the last node
    pop() {
        if (!this.head) return undefined;

        // start from the same position
        // 1       ->     2      -> 3     -> null
        //newTail 
        //current  
        let current = this.head;
        let newTail = current;

        // traverse while current.next is not null
        while (current.next) {
            // 1       ->     2      -> 3     -> null
            // newTail      current

            // let newTail at the current
            newTail = current;
            // let current reach the tail, 1 step ahead of newTail
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null; // use this.tail not newTail, so this.tail.next is null
        this.length--;

        // must be here, code goes line by line, unless it's a loop
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // return the poped value
    }

    // remove from the head
    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;
        this.head = oldHead.next; // same as this.head.next;
        this.length--;

        if (this.length === 0) {
            // this.head = null; // no need, because this.head will point to null
            this.tail = null;
        }

        return oldHead; // return removed head
    }

    // add to the head
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // let currentHead = this.head;
            newNode.next = this.head;
            this.head = newNode;
            // this.head.next = currentHead;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return null;
        // if (index === 0) return this.head;

        // let value = this.head;
        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            counter++;
            current = current.next; // 2nd round: this.head.next = this.head.next.next
        }
        return current;
    }

    set(index, val) {
        // if (!this.get(index)) {
        //     return false;
        // } else {
        //     let newNode = new Node(val); // no need it, as the node exists
        //     this.get(index).val = newNode;
        //     return true;
        // }

        let foundVal = this.get(index); // list.get(2) --- // Node {val: "!", next: Node}
        if (foundVal) {
            foundVal.val = val;
            return true;
        }
        return false;
    }

    // O(1)
    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        // insert at end
        if (index === this.length) {
            // return this.push(val) ? true : false;
            // !"hi" false, !!"hi" true
            return !!this.push(val);
        }
        // insert at beginning
        if (index === 0) {
            // return this.unshift(val) ? true : false;
            return !!this.unshift(val);
        }

        let newNode = new Node(val);
        // let next = this.get(index + 1); // keep this first
        let prev = this.get(index - 1);
        let next = prev.next; // same as let next = this.get(index + 1); 

        prev.next = newNode;
        newNode.next = next;
        this.length++;

        return true;
    }

    // O(1) or O(N), depends on where we remove
    // beginning O(1) end O(N)
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        // insert at end
        if (index === this.length - 1) {
            return this.pop();
        }
        // insert at beginning
        if (index === 0) {
            return this.shift();
        }

        let prev = this.get(index - 1);
        let removed = prev.next; //this.get(index);
        // let next = this.get(index + 1);
        // prev.next = next;
        prev.next = removed.next;
        this.length--;

        return removed;
    }

    // turn singly-linked-list into array
    print() {
        const arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        return arr;
    }

    reverse() {
        // swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null; // new tail will eventually point to null

        // [101, 102, 103, 104, 105]
        for (let i = 0; i < this.length; i++) {
            next = node.next; // 101 -> (102 is node.next) // 103
            node.next = prev; //101 -> null // 102 -> 101 -> null

            // update variables for next run
            prev = node; // shift prev to be 101
            node = next; // shift node to be 102
        }

        return this;
    }

}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push(101);
list.push(102);
list.push(103);
list.push(104);
list.push(105);
// list.pop();
list.get(2);