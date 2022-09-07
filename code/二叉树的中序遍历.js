const root = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
}


function inorderTraversal(root) {
    const res = []
    const stack = []
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        res.push(n.val)
        p = n.right
    }
    return res
}
debugger
console.log(inorderTraversal(root))
