export default class  BinaryTreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
    addLeft(node) {
        this.left = node
    }
    addRight(node) {
        this.right = node
    }
}
