/**
 * Represents a single node in a linked list
 * @class Node
 */
export class Node {
  /**
   * Creates a new Node instance
   * @param {*} value - The value to store in the node
   * @param {Node|null} nextNode - Reference to the next node (default: null)
   */
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
