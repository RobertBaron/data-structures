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

  remove(position) {
    let current = this.head;
    let deleted = null;
    let prevNode = null;
    let count = 1;

    if (position > this._length || position < 0) {
      throw Error('Invalid position for list');
    }

    // we are removing the first element
    if (position === 1) {
      deleted = this.head;
      this.head = current.next;
      this._length--;

      current = null;
      return deleted;
    }

    while(count < position) {
      prevNode = current;
      current = current.next;
      count++;
    }

    prevNode.next = current.next;
    deleted = current;
    this._length--;

    current = null;
    return deleted;
  }

}