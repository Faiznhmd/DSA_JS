//Linkedlist

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
  }
  addfirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log('Invalid Index');
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
    }
  }
}
