import { BinarySearchTree } from "./BinarySearchTree";

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(41);
console.log(bst.contains(41));
