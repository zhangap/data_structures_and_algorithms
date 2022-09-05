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

// 前序遍历
function order(data) {
    if(!data) return
    console.log(data.val)
    order(data.left)
    order(data.right)
}
order(data)

/**
 * 给定一个二叉树、找出其最大深度
 * @param root
 */
function maxDepth(root) {
    let  result = 0

    const dfs = (node,level) => {
        if(!node) return
        if(!node.left && !node.right) {
            result = Math.max(result, level)
        }
        dfs(node.left, level++)
        dfs(node.right, level++)
    }
    dfs(root,1)
    return result
}
console.log('二叉树深度：',maxDepth(data))
