const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  let newL = l;
  let prevL;

  while (newL.next) {
    if (newL.value === k) {
      newL.value = newL.next.value;
      newL.next = newL.next.next;
      if (newL.value === k) {
        newL.value = newL.next.value;
        newL.next = newL.next.next;
      }
    }

    prevL = newL;
    newL = newL.next;
  }

  if (prevL.next.value === k) {
    prevL.next = null;
  }

  return l;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

let l = convertArrayToList([1, 2, 3]);

console.log(removeKFromList(l, 3));

module.exports = {
  removeKFromList
};
