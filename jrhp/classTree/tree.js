export class BinaryTree {
  constructor() {
    this.root = null;
  }

  createNode(value) {
    return new Node(value);
  }

  insert(value) {
    const newNode = this.createNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        inversions++
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        inversions++
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  traverse(fn) {
    function inOrder(node) {
      if (node) {
        inOrder(node.left);
        fn(node);
        inOrder(node.right);
      }
    }

    inOrder(this.root);
  }
}
