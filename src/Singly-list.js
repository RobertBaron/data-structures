import { Node } from './Node';

export default class Singlylist {

  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(value) {
    // Increment the number of elements in the list
    this._length++;

    const node = new Node(value);
    let current = this.head;
    // The list doesn't have any elements yet
    if (!current) {
      this.head = node;
      return node;
    }

    // Reach the end of the list
    while(current.next) {
      current = current.next;
    }

    current.next = node;
    return node;
  }

  getLength() {
    return this._length;
  }

  searchAt(position) {
    let current = this.head;
    let count = 1;

    if (position > this._length || position < 0) {
      throw Error('Invalid position for list');
    }

    while(count < position) {
      current = current.next;
      count++;
    }

    return current;
  }

}