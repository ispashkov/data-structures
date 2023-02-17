class Node {
  public value: number;
  public next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;

  constructor(readonly value: number) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  public push = (value: number): LinkedList => {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }

    this.length++;

    return this;
  };

  public pop = (): Node | undefined => {
    if (!this.head) return undefined;

    let tmp = this.head;
    let pre = this.head;

    while (tmp.next) {
      pre = tmp;
      tmp = tmp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return pre;
  };

  public unshift = (value: number): LinkedList => {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  };

  public shift = (): Node | undefined => {
    if (!this.head) return undefined;

    let tmp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    tmp.next = null;

    return tmp;
  };

  public get = (index: number): Node | null | undefined => {
    if (index < 0 || index > this.length) return undefined;

    let tmp = this.head;

    for (let i = 0; i < index; i++) {
      if (tmp) {
        tmp = tmp.next;
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

  public insert = (index: number, value: number) => {
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
    const prev = this.get(index - 1);

    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }

    return false;
  };

  public remove = (index: number): boolean => {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.shift();
      return true;
    }

    if (index === this.length) {
      this.pop();
      return true;
    }

    const prev = this.get(index - 1);

    if (prev) {
      const current = prev.next;
      if (current) {
        prev.next = current.next;
        current.next = null;
        this.length--;
        return true;
      }
    }

    return false;
  };

  public reverse = (): LinkedList => {
    let tmp = this.head;
    this.head = this.tail;
    this.tail = tmp;

    let next = tmp!.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = tmp!.next;
      tmp!.next = prev;
      prev = tmp;
      tmp = next;
    }

    return this;
  };

  public print = (): void => {
    let tmp = this.head;
    let data = [];

    while (tmp !== null) {
      data.push(tmp.value);
      tmp = tmp.next;
    }

    console.log(data.join("->"));
  };
}
