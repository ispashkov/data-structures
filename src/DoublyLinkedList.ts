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

  public pop = (): Node | undefined => {
    if (this.length === 0) return;

    const temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }

    this.length--;

    return temp!;
  };

  public unshift = (value: number): DoublyLinkedList => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  };

  public shift = (): Node | undefined => {
    if (this.length === 0) return;

    const temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      temp!.next = null;
    }

    this.length--;

    return temp!;
  };

  public get = (index: number): Node | null | undefined => {
    if (index < 0 || index > this.length) return;

    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp!.next;
      }
    } else {
      temp = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        temp = temp!.prev;
      }
    }

    return temp;
  };

  public set = (index: number, value: number): boolean => {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  };

  public insert = (index: number, value: number): boolean => {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const prev = this.get(index - 1)!;
    const next = prev.next!;

    prev.next = newNode;
    newNode.next = next;
    newNode.prev = prev;
    next.prev = newNode;

    this.length++;
    return true;
  };

  public remove = (index: number): boolean => {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.shift();
      return true;
    }

    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    const temp = this.get(index)!;

    temp.prev!.next = temp.next;
    temp.next!.prev = temp.prev;
    temp.prev = null;
    temp.next = null;

    this.length--;

    return true;
  };

  public print = (): void => {
    let temp = this.head;
    let data = [];

    while (temp !== null) {
      data.push(temp.value);
      temp = temp.next;
    }

    console.log(data.join("<->"));
  };
}
