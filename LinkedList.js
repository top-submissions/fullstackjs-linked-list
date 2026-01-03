import { Node } from './Node.js';

/**
 * Represents a singly linked list data structure
 * @class LinkedList
 */
export class LinkedList {
  /**
   * Creates a new empty LinkedList
   */
  constructor() {
    this.headNode = null;
  }

  /**
   * Adds a new node containing value to the end of the list
   * @param {*} value - The value to add
   */
  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  /**
   * Adds a new node containing value to the start of the list
   * @param {*} value - The value to add
   */
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }
}
