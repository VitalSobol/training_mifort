const Node = require('./node');

class BinaryTree {

  constructor() {
    this.root = null;
  }

  add(value) {
    if(!value){
      throw new Error('Not value');
    }
    let currentNode = new Node(value);
    if (!this.root) {
      this.root = currentNode;
    } else {
      this._insert(currentNode);
    }
    return this;
  }

  delete(key) {
  }

  search(key) {
    if(!key){
      throw new Error('Not key');
    }
    let traverse = function (node) {
      if (!node) {
        return null;
      }
      if (key === node.value) {
        return node.value;
      } else if (key > node.value) {
        return traverse(node.right);
      } else if (key < node.value) {
        return traverse(node.left);
      }
    };
    return traverse(this.root);
    }

  _insert(currentNode){
    let value = currentNode.value;
    let traverse = function (node) {
      if (value > node.value) {
        if (!node.right) {
          node.right = currentNode;
          return this;
        } else traverse(node.right);
      } else if (value < node.value) {
        if (!node.left) {
          node.left = currentNode;
          return this;
        } else traverse(node.left);
      }
    };
    traverse(this.root);
  }
}



module.exports = BinaryTree;
