'use strict';

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

  // insertBefore(item, node) {
  //   if (this.head === null) {
  //     console.log('Array is empty');
  //   } else {
  //     let tempNode = this.head;
  //     let targetNode = this.head;
  //     let tempNode2 = tempNode;
  //     while (targetNode.value !== node) {
  //       if (targetNode.next === null) {
  //         return null;
  //       } else {
  //         tempNode = tempNode.next;
  //         tempNode2 = tempNode;
  //       }
  //     }
  //     targetNode = new _Node(item, tempNode);
  //     tempNode2.next = targetNode;
  //   }
  // }

  insertBefore(item, node) {
    if (this.head === null) {
      console.log('Array is empty');
    }
    while
  }

  insertAfter(item, node) {
    if (this.head === null) {
      console.log('Array is empty');
    } else {
      let tempNode = this.head;
      while (tempNode.value !== node) {
        if (tempNode.next === null) {
          return null;
        } else {
          tempNode = tempNode.next;
        }
      }
      tempNode.next = new _Node(item, this.head);
    }
  }

  find(item) {
    //start at the head
    let currNode = this.head;

    // if the list is empty
    if (!this.head) {
      return null;
    }

    // check for the item
    while (currNode.value !== item) {
      // return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        // otherwise keep looking
        currNode = currNode.next;
      }
    }
    // found it
    return currNode;
  }

  remove(item) {
    // if the list is empty
    if (!this.head) {
      return null;
    }
    
    // if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return ;
    }

    // start at the head
    let currNode = this.head;

    // keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return ;
    }
    previousNode.next = currNode.next;
  }
}

const main = () => {
  // create new instance of a linked list
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');

  console.log(SLL);

  SLL.insertFirst('Tauhida');

  console.log(SLL);

  SLL.remove('squirrel');
  
  SLL.insertBefore('Thinkful', 'Tauhida');
  console.log(SLL);
};

main();


