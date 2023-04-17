const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data; // node value
    this.left = null; // left node child reference
    this.right = null; // right node child reference
  }
  findMax(node) {
    if (node.right === null) return node.data;
    else return node.findMax(node.right);
  }
  findMin(node) {
    if (node.left === null) return node.data;
    else return node.findMin(node.left);
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
    let newNode = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      this.insertNode(this.treeRoot, newNode);
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    if (this.treeRoot === null) {
      return null;
    } else if (data < this.treeRoot.data) {
      return this.search(this.treeRoot.left, data);
    } else if (data > this.treeRoot.data) {
      return this.search(this.treeRoot.right, data);
    } else {
      return this.treeRoot;
    }
  }
  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }

  min() {
    if (this.treeRoot.left != null) {
      return this.treeRoot.left.findMin(this.treeRoot.left);
    } else {
      return this.treeRoot.data;
    }
  }

  max() {
    if (this.treeRoot.right != null) {
      return this.treeRoot.right.findMax(this.treeRoot.right);
    } else {
      return this.treeRoot.data;
    }
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
      // если данные такие как данные корня, удаляем узел
    } else {
      // удаляем узел без потомков (листовой узел (leaf) или крайний)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // удаляем узел с одним потомком
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
  minNode(node) {
    // если слева от узла ноль тогда это должен быть минимальный узел
    if (node.left === null) return node;
    else return this.minNode(node.left);
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

//console.log(tree.min())
module.exports = {
  BinarySearchTree,
};
