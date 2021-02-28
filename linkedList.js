class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, before) {
        if (this.head.value === before) {
            this.insertFirst(item);
        }

        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== before)) {
            previousNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        previousNode.next = new _Node(item, currNode);
    }

    insertAfter(item, after) {
        if (!this.head) {
            return null;
        }

        let currNode = this.head;

        while ((currNode !== null) && (currNode.value !== after)) {
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }

        if (currNode.next === null) {
            this.insertLast(item);
        } else {
            currNode.next = new _Node(item, currNode.next);
        }
    }

    insertAt(item, position) {
        let counter = 1;
        let currNode = this.head;

        while (counter != position) {
            counter++;
            currNode = currNode.next;
        }

        if (counter = position) {
            this.insertBefore(item, currNode.value);
        }
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list and the item
               is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                // Otherwise, keep looking
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function main() {
    // Create a linked list with name SLL
    let SLL = new LinkedList;

    // Add Apollo, Boomer, Helo, Husker, Starbuck
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    // Add Tauhida to the list
    SLL.insertLast('Tauhida');

    // Remove Husker
    SLL.remove('Husker');

    // Add Athena before Boomer
    SLL.insertBefore('Athena', 'Boomer');

    // Add Hotdog after Helo
    SLL.insertAfter('Hotdog', 'Helo');

    // Insert Kat in 3rd position
    SLL.insertAt('Kat', 3);

    // Remove Tauhida
    SLL.remove('Tauhida');
}

function display(linkedList) {
    let currNode = linkedList.head;
    
    while (currNode !== null) {
        console.log(currNode.value);
        currNode = currNode.next;
    }
}

function size(linkedList) {
    if (!linkedList.head) {
        return 0;
    }
    let currNode = linkedList.head
    let count = 1

    while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
    }
    return count;
}

function isEmpty(linkedList) {
    if (!linkedList.head) {
        return true;
    }
    return false;
}

function findPrevious(linkedList, item) {
    let currNode = linkedList.head;
    let previousNode = linkedList.head;

    if (currNode.value === item) {
        console.log('Item is the first in list, no previous item');
        return;
    }

    while ((currNode.value !== item) && (currNode !== null)) {
        previousNode = currNode;
        currNode = currNode.next;
    }

    if (currNode === null) {
        console.log('Item not found');
        return;
    }

    return previousNode;
}

function findLast(linkedList) {
    let currNode =linkedList.head;

    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    return currNode;
}

function reverseList(linkedList) {
    if (!linkedList.head) {
        return null;
    }

    let currNode = linkedList.head;
    let previousNode = null;
    let tempNode = linkedList.head;

    while (currNode !== null) {
        tempNode = currNode.next;
        currNode.next = previousNode;
        previousNode = currNode;
        currNode = tempNode;
    }

    linkedList.head = previousNode;
}

function thirdFromEnd(linkedList) {
    if (!linkedList.head) {
        return null;
    }

    let currNode = linkedList.head;
    let previousNode = null;
    let previousPreviousNode = null;

    while (currNode.next !== null) {
        previousPreviousNode = previousNode;
        previousNode = currNode;
        currNode = currNode.next;
    }
    return previousPreviousNode;
}