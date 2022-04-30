const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {

  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {

    const NEW_LIST_NODE = new ListNode(value);

    let tempList = this.list;
    let elementWasAdded = false;

    if (!this.list) {
      this.list = NEW_LIST_NODE;
    } else {
      while (tempList && !elementWasAdded) {

        if (!tempList.next) {
          tempList.next = NEW_LIST_NODE;
          elementWasAdded = true;
        }
        tempList = tempList.next;
      }

      elementWasAdded = false;
    }

    return this.list
  }

  dequeue() {
    let value = this.list.value;
    this.list = this.list.next;
    return value;
  }
}


module.exports = {
  Queue
};
