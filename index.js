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

  // 5, 9, 10, 11
  // (6, 9) => item is #, node is obj

  insertBefore(item, value) {
    let prev = this.head;
    let current = this.head;
    while (current.value !== value) {
      prev = current;
      current = current.next;
    }
    prev.next = new _Node(item, current);
  }

  insertAfter(item, value) {
    let prev = this.head;
    let current = this.head;
    while (current.value !== value) {
      prev = current;
      current = current.next;
    }
    prev.next = new _Node(item, current.next);
  }

  insertAt(item, position) {
    let counter = 0;
    let prev = this.head;
    let current = this.head;
    while (position > counter) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = new _Node(item, current);
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
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');

  SLL.insertBefore('Boomer', 'Helo');
  SLL.insertAfter('Pudge', 'Starbuck');
  SLL.insertAt('Kasha', 4);

  SLL.remove('Tauhida');

  return SLL;
};



// DISPLAY //
const display = ll => {
  console.log(JSON.stringify(ll, null, 1));
  return JSON.stringify(ll);
};

display(main());



// SIZE //
const size = ll => {
  let counter = 0;
  let pointer = ll.head;

  while (pointer !== null) {
    pointer = pointer.next;
    counter++;
  }
  console.log(counter);
  return counter;
};

size(main());



// IS IT EMPTY? //
const isEmpty = ll => {
  if (ll.head === null) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

isEmpty(main());



// FIND PREVIOUS //
const findPrevious = ll => {
  if (isEmpty(ll)) {
    console.log('Empty array');
  }

};



// FIND LAST //
const findLast = ll => {
  let counter = 0;
  let prev = ll.head;
  if (isEmpty(ll)) {
    console.log('Empty array');
  }
  while (counter < (size(ll) - 1)) {
    prev = prev.next;
    counter++;
  }
  console.log(prev);
  return prev;
};

findLast(main());