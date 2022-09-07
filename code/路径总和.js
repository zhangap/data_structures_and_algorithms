// 深度优先遍历

// 给定一个二叉树和一个目标和、判断该树种是否存在根节点到叶子节点的路径、这条路径上的所有节点只相加等于目标和
// 说明：叶子节点是指没有子节点的节点

import BinaryTreeNode from "./BinaryTreeNode.js";


// 构造一棵二叉树
const node5 = new BinaryTreeNode(5)
const node4 = new BinaryTreeNode(4)
const node8 = new BinaryTreeNode(8)
const node11 = new BinaryTreeNode(11)
const node13 = new BinaryTreeNode(13)
const node4_ = new BinaryTreeNode(4)
const node7 = new BinaryTreeNode(7)
const node2 = new BinaryTreeNode(2)
const node1 = new BinaryTreeNode(1)

node5.addLeft(node4)
node5.addRight(node8)

node4.addLeft(node11)

node8.addLeft(node13)
node8.addRight(node4_)

node11.addLeft(node7)
node11.addRight(node2)

node4_.addRight(node1)


function hasPathSum(root, sum) {
    if(!root) return false
    let result = false
    const dfs = (node, s) => {
        // console.log(node.val, s)
        // 如果是叶子节点，且计算的路径总和的值等于给定值，说明找到了
        if(!node.left && !node.right && s === sum) {
            result = true
            return
        }
        if(node.left) dfs(node.left, s + node.left.val)
        if(node.right) dfs(node.right, s + node.right.val)
    }

    dfs(root, root.val)
    return result
}

console.log(hasPathSum(node5, 22))
