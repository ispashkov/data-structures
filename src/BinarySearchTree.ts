class Node {
  public value: number;
  public left: Node | null;
  public right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  public root: Node | null;

  constructor() {
    this.root = null;
  }

  public insert = (value: number): BinarySearchTree | undefined => {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }

        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  };

  public contains = (value: number): boolean => {
    if (!this.root) return false;

    let temp: Node | null = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  };

  public print = (): void => {
    console.log(JSON.stringify(this.root, null, 2));
  };
}
