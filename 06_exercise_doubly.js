//creating a linkedlist

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);

    //point to the leader of the index to attach to
    const leader = this.traverseToIndex(index - 1);
    //now have the current item in that index
    const follower = leader.next;

    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    //as soon as counter reaches to index, traverse through
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;

    leader.next = unwantedNode.next;

    unwantedNode.next.previous = leader;
    this.length--;

    return this.printList();
  }

  printList() {
    const arr = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return console.log(arr);
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(3);

myLinkedList.insert(2, 99);

myLinkedList.remove(2);
