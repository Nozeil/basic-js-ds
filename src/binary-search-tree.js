//const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {

    const NEW_NODE = new Node(data);

    if (!this.treeRoot) {
      this.treeRoot = NEW_NODE;
    } else {
      insertNode(this.treeRoot, NEW_NODE);
    }

    function insertNode(node, newNode) {

      if (newNode.data === node.data) {
        return;
      }

      if (node.data < newNode.data) {
        (!node.right) ? node.right = NEW_NODE : insertNode(node.right, NEW_NODE);
      } else {
        (!node.left) ? node.left = NEW_NODE : insertNode(node.left, NEW_NODE);
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {

    return checkNode(this.treeRoot);

    function checkNode(node) {

      if (node.data === data) {
        return node;
      }

      if (node.data > data && !node.left || node.data < data && !node.right) {
        return null;
      }

      return (node.data < data) ? checkNode(node.right) : checkNode(node.left);

    }
  }

  remove(data) {

    return this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {

      if (node.data === data) {
        if (!node.right && !node.left) {
          return node = null;
        } else if (!node.left) {
          return node = node.right;
        } else if (!node.right) {
          return node = node.left;
        } else {

          let maxLeft = node.left;

          while (maxLeft.right) {
            maxLeft = maxLeft.right;
          }

          node.data = maxLeft.data;
          node.left = removeNode(node.left, node.data);
          return node;

        }

      } else {
        if (node.data > data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
    }
  }

  min() {
    return findMin(this.treeRoot);

    function findMin(node) {
      if (!node.left) {
        return node.data;
      }

      return findMin(node.left);
    }
  }

  max() {
    return findMax(this.treeRoot);

    function findMax(node) {
      if (!node.right) {
        return node.data;
      }

      return findMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};