


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    // this.root = new TreeNode(value);
    this.root = value;
    this.str = ''
  }

  preOrder() {
    this._preOrder(this.root);
    return this.str
  }

  _preOrder(root) {
    if (root !== null) {

      this.str += root.value

      if(root.left || root.right){
        this.str += ' ('
      
        if(root.left) {
          this._preOrder(root.left)
        }else{
          this.str += 'null'
        }
  
        this.str += '; '
        if(root.right) {
          this._preOrder(root.right)
        }else{
          this.str += 'null'
        }
  
        this.str += ') '
      }

     
    }
  }
}

let tree = new TreeNode(10);
tree.left = new TreeNode(20);
tree.left.left = new TreeNode(40);
tree.left.right = new TreeNode(50);
tree.left.right.left = new TreeNode(70);
tree.left.right.right = new TreeNode(80);

tree.right = new TreeNode(30);
tree.right.left = new TreeNode(60);
tree.right.left.right = new TreeNode(90);

let bt = new BinaryTree(tree);

console.log(bt.preOrder());



























































































































// class Person{
//   constructor(name){
//     this.name = name
//     this.m = null
//     this.f = null
//   }
// }

// class TreeTravers{
//   constructor(person){
//     this.person = person
//   }
//   show(){
//     console.log(this.person)
//   }
// }

// let me = new Person('Anatolii')
// let mother = new Person('Antonina')
// let father = new Person('Yuri')

// me.m = mother
// me.f = father

// let myTree = new TreeTravers(me)

// myTree.show()





