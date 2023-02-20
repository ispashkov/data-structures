import { BinarySearchTree } from "./BinarySearchTree";

const tree = new BinarySearchTree();
tree.insert(47);
tree.insert(21);
tree.insert(76);
tree.insert(18);
tree.insert(27);
tree.insert(52);
tree.insert(82);
tree.print();
console.log(tree.DFSPostOrder());
