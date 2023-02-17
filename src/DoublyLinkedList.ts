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

  public push = (value: number): DoublyLinkedList => {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  };

  public print = (): void => {
    let tmp = this.head;
    let data = [];

    while (tmp !== null) {
      data.push(tmp.value);
      tmp = tmp.next;
    }

    console.log(data.join("<->"));
  };
}
