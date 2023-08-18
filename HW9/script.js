// 1. Реализовать методы в MyLinkedList:
// pushToTail(int data), 
// pushToIndex(int index, int data)
// removeLast(), 
// remove(int index)
// get(int index)
// 2. Переделать односвязный в двусвязный

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null; 
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }

    pushToTail(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
    }

    print() {
        let currentNode = this.head;
        while (currentNode != null) {
            process.stdout.write(currentNode.data + "->");
            currentNode = currentNode.next;
        }
        console.log("null");
    }

    pushToIndex(index, data) {
        if (index < 0) {
            console.log("The index cannot be negative");
        } else if (index == 0) {
            const newNode = new Node(data);
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
            }
            this.head = newNode;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (currentNode == null) {
                    console.log("The index is out of range");
                    return;
                }
                currentNode = currentNode.next;
            }
            const newNode = new Node(data);
            newNode.next = currentNode.next;
            if (currentNode.next) {
                currentNode.next.prev = newNode;
            }
            newNode.prev = currentNode;
            currentNode.next = newNode;
        }
    }

    removeLast() {
        if (this.head == null) {
            console.log("The linked list is empty");
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            let currentNode = this.head;
            while (currentNode.next.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = null;
        }
    }

    remove(index) {
        if (index < 0) {
            console.log("The index cannot be negative");
        } else if (index == 0) {
            if (!this.head) {
                console.log("The linked list is empty");
            } else {
                this.head = this.head.next;
                if (this.head) {
                    this.head.prev = null;
                }
            }
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (!currentNode) {
                    console.log("The index is out of range");
                    return;
                }
                currentNode = currentNode.next;
            }
            if (!currentNode || !currentNode.next) {
                console.log("The index is out of range");
                return;
            }
            currentNode.next = currentNode.next.next;
            if (currentNode.next) {
                currentNode.next.prev = currentNode;
            }
        }
    }

    get(index) {
        if (index < 0) {
            console.log("The index cannot be negative");
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            if (!currentNode) {
                console.log("The index is out of range");
                return null;
            }
            currentNode = currentNode.next;
        }
        return currentNode ? currentNode.data : null;
    }
}

const mainList = new LinkedList();

console.log("Initial list:");
mainList.print();

mainList.pushToTail(1);
mainList.pushToTail(2);
mainList.pushToTail(3);

console.log("After pushToTail:");
mainList.print();

mainList.pushToIndex(1, 4);

console.log("After pushToIndex:");
mainList.print();

mainList.removeLast();

console.log("After removeLast:");
mainList.print();

mainList.remove(1);

console.log("After remove:");
mainList.print();

console.log("Element at index 1:", mainList.get(1));

