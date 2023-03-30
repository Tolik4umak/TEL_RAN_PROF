class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let t = new Node(value);

    if (this.head === null) {
      this.head = t;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = t;
    }
  }

  info() {
    let result = '[';
    let current = this.head;
    while (current !== null) {
      result += `${current.data} `;
      current = current.next;
    }
    return result.trim() + ']';
  }

  find() {

    let slow = this.head;
    let fast = this.head;

    while (slow !== null && fast !== null) {
      slow = slow.next
      fast = fast.next.next

      if (slow === fast) return true;
    }
    return false;
  }

}

let mlk = new MyLinkedList();
mlk.append(12);
// mlk.append(4);
// mlk.append(7);
// mlk.append(0);
// mlk.append(9);

console.log(mlk.info());
