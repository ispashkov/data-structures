class Node {
  public value: number;
  public next: Node | null;
  public prev: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;

  constructor(readonly value: number) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}
