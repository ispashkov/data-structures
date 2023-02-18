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

    const tmp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      tmp!.prev = null;
    }

    this.length--;

    return tmp!;
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

    const tmp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      tmp!.next = null;
    }

    this.length--;

    return tmp!;
  };

  public get = (index: number): Node | null | undefined => {
    if (index < 0 || index > this.length) return;

    let tmp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        tmp = tmp!.next;
      }
    } else {
      tmp = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        tmp = tmp!.prev;
      }
    }

    return tmp;
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

    const tmp = this.get(index)!;

    tmp.prev!.next = tmp.next;
    tmp.next!.prev = tmp.prev;
    tmp.prev = null;
    tmp.next = null;

    this.length--;

    return true;
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
