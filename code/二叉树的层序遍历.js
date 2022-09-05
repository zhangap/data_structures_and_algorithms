// 测试数据
const data = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left:null,
            right: null
        }
    }
}

/**
 * 二叉树的层序遍历
 * @param root
 */
function levelOrder(root) {
    if(!root) return []
    // 把根节点放到数组中，二维数组的第二个表示是层级
    const queue = [[root,0]]
    const res = []
    while (queue.length) {
        const [node, level] = queue.shift()
        if(!res[level]) {
            res.push([node.val])
        } else {
            res[level].push(node.val)
        }
        if(node.left) queue.push([node.left, level + 1])
        if(node.right) queue.push([node.right, level+1])
    }
    return res
}

console.log('结果', levelOrder(data))















