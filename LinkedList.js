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

  /**
   * Returns the total number of nodes in the list
   * @returns {number} The size of the list
   */
  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  /**
   * Checks if the given value exists in the list
   * @param {*} value - The value to search for
   * @returns {boolean} True if value is found, false otherwise
   */
  contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  /**
   * Returns the value of the first node in the list
   * @returns {*} The value of the head node, or undefined if list is empty
   */
  head() {
    return this.headNode?.value;
  }

  /**
   * Returns the value of the last node in the list
   * @returns {*} The value of the tail node, or undefined if list is empty
   */
  tail() {
    if (this.headNode === null) {
      return undefined;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current.value;
  }
}
