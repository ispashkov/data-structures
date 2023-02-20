class Node {
  public value: number;
  public next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  public first: Node | null;
  public last: Node | null;
  public length: number;

  constructor(readonly value: number) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  public enqueue = (value: number): Queue => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  };

  public dequeue = (): Node | undefined => {
    if (this.length === 0) return;

    const temp = this.first!;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first!.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  };

  public print = (): void => {
    let temp = this.first;
    let data = [];

    while (temp !== null) {
      data.push(temp.value);
      temp = temp.next;
    }

    console.log(data.join("<-"));
  };
}
