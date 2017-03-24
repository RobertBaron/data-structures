import { Node } from './Node';

export default class DoubleList {

  constructor() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new Node(value);
    // List is empty
    if(this._length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
      this.tail.next = null;
    }

    this._length++;
    return node;
  }

  getLength() {
    return this._length;
  }

  searchAt(position) {

    if(position > this._length || position  < 0) {
      throw Error('Invalid position for list')
    }

    let current = this.head;
    let count = 1;

    while(count < position) {
      current = current.next;
      count++;
    }

    return current;
  }

  remove(position) {

    if(position > this._length || position  < 0) {
      throw Error('Invalid position for list')
    }


    // We are removing head
    if (position === 1) {
      let deleted = this.head;
      this.head = deleted.next;
      this.head.previous = null;
      this._length--;

      return deleted;
    }

    // We are removing the tail
    if(position === this._length) {
      let deleted = this.tail;
      let previous = this.tail.previous;
      this.tail = previous;
      this.tail.next = null;
      this._length--;

      return deleted;
    }

    // Removing elsewhere
    let current = this.head;
    let previous = current.previous;
    let count = 1;
    while(count < position) {
      previous = current;
      current = current.next;
      count++;
    }

    let nextNode = current.next;
    previous.next = nextNode;
    nextNode.previous = previous;

    this._length--;
    return current;
  }
}
