import { Queue } from "./Queue";

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
queue.enqueue(4);
queue.print();
queue.dequeue();
queue.print();
