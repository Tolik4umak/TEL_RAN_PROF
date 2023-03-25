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
      this.tail = null
    }

  
    addToHead(val) {
      let node = new Node(val);
  
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head
        this.head.prev = node
        this.head = node
      }
    }

    addToTail(val){
        let node = new Node(val)

        if(this.tail === null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
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
  }
  let arr = [];
  
  let mlk = new MyLinkedList();

  mlk.addToHead(1)
  mlk.addToTail(2)
  mlk.addToTail(3)
  mlk.addToHead(4)



  console.log(mlk.info());
  
  console.log(mlk.info());


















































// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null;
//     }
// }

// class MyList {
//     constructor(){
//         this.head = null
//     }

//     append(val){
//         let t = new Node(val)

//         if(this.head === null){
//             this.head = t 
//         }else {
//             let cur = this.head
//             while(cur.next !== null){
//                 cur = cur.next
//             }
//             cur.next = t
//         }
//     }

//     print(){
//         let cur = this.head
//         while(cur !== null){
//             console.log(cur.data)
//             cur = cur.next
//         }
//     }
// }

// let list1 = new MyList()

// list1.append(10)
// list1.print()



