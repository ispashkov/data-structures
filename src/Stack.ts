class Node {
  public value: number;
  public next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  public top: Node | null;
  public length: number;

  constructor(value: number) {
    this.top = new Node(value);
    this.length = 1;
  }

  public push = (value: number): Stack => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return this;
  };

  public pop = (): Node | undefined => {
    if (this.length === 0) return;

    const tmp = this.top!;
    this.top = this.top!.next;
    tmp.next = null;

    this.length--;

    return tmp;
  };

  public print = (): void => {
    let tmp = this.top;
    let data = [];

    while (tmp !== null) {
      data.push(tmp.value);
      tmp = tmp.next;
    }

    console.log(data.join("->"));
  };
}
