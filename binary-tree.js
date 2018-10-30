class BinaryTree {
    constructor() {
        this.root = null
    }

    print(currentNode) {
        console.log(currentNode.data)
        if(currentNode.left) this.print(currentNode.left)
        if(currentNode.right) this.print(currentNode.right)
    }

    addToTheHead(data) {
        let newNode = new Node(data)
        this.root = newNode
    }

    addToLeftLeaf(data) {
        if (this.root == null) {
            this.addToTheHead(data)
            return;
        }

        let currentNode = this.root

        while (currentNode.left) { currentNode = currentNode.left }

        currentNode.left = new Node(data)
    }

    addToRightLeaf(data) {
        if (this.root == null) {
            this.addToTheHead(data)
            return;
        }

        let currentNode = this.root

        while (currentNode.right) { currentNode = currentNode.right }

        currentNode.right = new Node(data)
    }

    addLeft(currentNode, data) {
        currentNode.left = new Node(data);
    }

    addRight(currentNode, data) {
        currentNode.right = new Node(data);
    }

    search(currentNode, data) {
        if (!currentNode) return false;
        if (currentNode.data == data) return currentNode;
        return this.search(currentNode.left, data) || this.search(currentNode.right, data)
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

let bt = new BinaryTree()
bt.addToTheHead('5');
bt.addToLeftLeaf('7');
bt.addToLeftLeaf('3');
bt.addRight(bt.search(bt.root, '7'), '6')
bt.addToRightLeaf('4');
bt.addLeft(bt.search(bt.root, '4'), '2')
bt.addToRightLeaf('1');

bt.print(bt.root);