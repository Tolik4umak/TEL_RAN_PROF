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
  }

  preOrder(visit) {
    this._preOrder(this.root, visit);
  }

  _preOrder(root, visit) {
    if (root !== null) {
      visit(root.value);
      this._preOrder(root.left, visit)
      this._preOrder(root.right, visit)
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

// let bt = new BinaryTree(tree);

// bt.preOrder(console.log);

function _preOrder(root) {
  if (root !== null) {
    console.log(root.value);
    _preOrder(root.left)
    _preOrder(root.right)
  }
}
_preOrder(tree);