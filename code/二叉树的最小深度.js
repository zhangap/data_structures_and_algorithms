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
 * 二叉树的最小深度
 * @param root
 */
function minDepth(root) {
    if(!root) {
        return 0
    }
    // 把根节点放到队列里面
    const q = [[root,1]]
    while (q.length) {
        const [n,l] = q.shift()
        // console.log(n.val,l)
        if(!n.left && !n.right) {
            return l
        }
        if(n.left) q.push([n.left, l+1])
        if(n.right) q.push([n.right, l+1])
    }
}
console.log(`最小深度：${minDepth(data)}`)
