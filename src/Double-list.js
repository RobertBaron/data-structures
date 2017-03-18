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
    }

    this._length++;
    return node;
  }

  getLength() {
    return this._length;
  }

  searchAt(position) {
    let current = this.head;
    let count = 1;

    if(position > this._length || position  < 0) {
      throw Error('Invalid position for list')
    }

    while(count < position) {
      current = current.next;
      count++;
    }

    return current;
  }

  remove(position) {

  }
}