
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}



class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

function printList(node) {
  let temp = node;

  while (temp !== null) {
    // console.log(temp.data);
    temp = temp.next;
  }
}


function hasLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    console.log(`slowPtr: ${slow.data}  fastPtr: ${fast.data}  `);
    if (slow === fast) return slow;
  }
  return slow;
}

console.log("start");
let root = new Node(2);
let n4 = new Node(4);
let n7 = new Node(7);
let n0 = new Node(0);
let n9 = new Node(9);

root.next = n4;
n4.next = n7;
n7.next = root;
n0.next = n9;

// printList(headList);

console.log(hasLoop(root));
