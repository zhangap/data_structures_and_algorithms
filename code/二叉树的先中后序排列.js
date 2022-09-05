import {bt} from './bt.data.js'
/**
 * 前序遍历(先遍历左节点，再遍历右节点)
 * @param data
 */
function preOrder(data) {
    if(!data) return
    // 1、遍历根节点
    console.log(data.val)
    // 2、遍历左子树
    preOrder(data.left)
    // 3、遍历右子树
    preOrder(data.right)
}
/**
 * 先序遍历，利用非递归方式来实现
 * @param data
 */
function preOrder2(data) {
    if(!data) return
    const stack = [data]
    while (stack.length) {
        const root = stack.pop()
        console.log(root.val)
        if(root.right) stack.push(root.right)
        if(root.left)stack.push(root.left)
    }
}

console.log('先序遍历------------')
// preOrder(bt)
preOrder2(bt)

 
/**
 * 中序遍历
 * @param data
 */
function inOrder(data) {
    if(!data) return
    // 1、遍历左子树
    inOrder(data.left)
    // 2、遍历根节点
    console.log(data.val)
    // 3、遍历右节点
    inOrder(data.right)
}

/**
 * 中序遍历
 * @param data
 */
function inOrder2(data) {
    if(!data) return
    const stack = []
    // 先把根节点给指针
    let point = data
    while (stack.length || point) {
        // 把根节点以及所有左子树放在栈中
        while (point) {
            stack.push(point)
            point = point.left
        }
        //访问节点
        const top = stack.pop()
        console.log(top.val)
        // 把右节点放到栈中
        point = top.right
    }
}

console.log('中序遍历-----------')
// inOrder(bt)
inOrder2(bt)
/**
 * 后续遍历
 * @param data
 */
function postOrder(data) {
    if(!data) return
    // 1、先遍历左子树
    postOrder(data.left)
    // 2、再遍历右子树
    postOrder(data.right)
    // 3、最后遍历根节点
    console.log(data.val)
}

/**
 * 后续遍历非递归版本
 * @param data
 */
function postOrder2(data) {
    if(!data) return
    const outputStack = []
    const stack = [data]
    while (stack.length) {
        const n = stack.pop()
        outputStack.push(n)
        if(n.left) stack.push(n.left)
        if(n.right) stack.push(n.right)
    }
    while (outputStack.length) {
        const n = outputStack.pop()
        console.log(n.val)
    }
}
console.log('后续遍历-----------')
// postOrder(bt)
postOrder2(bt)
