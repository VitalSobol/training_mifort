const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  add(value) {
    if (!value) {
      return null;
    }
    let newNode = new Node(value);
    let currentNode = this.head;
    this.length++;

    if (!currentNode) {
      this.head = newNode;
      return newNode;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    return newNode;
  }

  remove(position) {
    let deletedNode = null;

    if (position < 0 || position >= this.length) {
      throw new Error('Non-existent node in this list');
    }

    this.length--;

    if (position === 0) {
      deletedNode = this._removeFromHead();
    } else {
      deletedNode = this._removeNode(position);
    }
    return deletedNode;
  }

  get(position){
    let currentNode = this.head;
    let count = 0;

    if(position < 0 || position >= this.length){
      throw new Error('Non-existent node in this list');
    }

    while(count < position){
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  insert(position, value){
    if (!value) {
      return null;
    }
    if(position < 0 || position > this.length){
      throw new Error('Non-existent node in this list');
    }
    let newNode;
    this.length++;
    if(position === 0){
      newNode = this._insertToHead(value);
    } else {
      newNode = this._insertNode(position, value);
    }
    return newNode;
  }
  _insertToHead(value){
    let newNode = new Node(value);
    newNode.next = this.head;

    this.head = newNode;

    return newNode;
  }

  _insertNode(position, value){
    let newNode = new Node(value);
    let beforeNewNode, afterNewNode;
    let currentNode = this.head;
    let count = 0;

    while(count < position){
      beforeNewNode = currentNode;
      afterNewNode = currentNode.next;
      currentNode = currentNode.next;
      count++;
    }

    beforeNewNode.next = newNode;
    newNode.next = afterNewNode;

    return newNode;
  }

  _removeFromHead(){
    let deletedNode;
    let currentNode = this.head;

    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;

    return deletedNode;
  }

  _removeNode(position){
    let beforeNodeToDelete, deletedNode;
    let nodeToDelete = this.head;
    let count = 0;

    while (count < position) {
      beforeNodeToDelete = nodeToDelete;
      nodeToDelete = nodeToDelete.next;
      count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;

    return deletedNode;
  }
}

module.exports = LinkedList;
