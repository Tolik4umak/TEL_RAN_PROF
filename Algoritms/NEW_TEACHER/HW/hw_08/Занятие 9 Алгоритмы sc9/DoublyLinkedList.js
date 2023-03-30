class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushToHead(data) {
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
  }

  pushToTail(data) {
    let node = new Node(data);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  pushToIndex(index, data) {
    if (index < 0 || index > this.size) {
      return false;
    } else {
      let node = new Node(data);

      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
        }
      } else if (index === this.size) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        let current = this.head;
        let i = 0;

        while (i < index) {
          i++;
          current = current.next;
        }

        node.next = current;
        node.prev = current.prev;
        current.prev.next = node;
        current.prev = node;
      }

      this.size++;
      return true;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return false;
    } else {
      let current = this.head;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else if (index === 0) {
        this.head = current.next;
        this.head.prev = null;
      } else if (index === this.size - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let i = 0;

        while (i < index) {
          i++;
          current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
      }

      this.size--;
      return current.data;
    }
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }

    let data = this.head.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return data;
  }

  removeLast() {
    if (this.tail === null) {
      return null;
    }

    let data = this.tail.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return data;
  }

  getSize() {
    return this.size;
  }


  printListData() {
    console.log('\n===\n');
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.pushToHead(1);
doublyLinkedList.pushToHead(2);
doublyLinkedList.pushToTail(3);

doublyLinkedList.printListData();