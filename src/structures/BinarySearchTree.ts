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

  public BFS = (): number[] => {
    let currentNode = this.root!;
    const queue: Node[] = [];
    const results: number[] = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift()!;
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return results;
  };

  public DFSPreOreder = () => {
    const result: Number[] = [];

    function traverse(currentNode: Node) {
      result.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root!);

    return result;
  };

  public DFSInOrder = () => {
    const result: Number[] = [];

    function traverse(currentNode: Node) {
      if (currentNode.left) traverse(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root!);

    return result;
  };

  public DFSPostOrder = () => {
    const result: Number[] = [];

    function traverse(currentNode: Node) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      result.push(currentNode.value);
    }

    traverse(this.root!);

    return result;
  };

  public print = (): void => {
    console.log(JSON.stringify(this.root, null, 2));
  };
}
