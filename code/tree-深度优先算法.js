import {tree} from './tree.data.js'

/**
 * 深度优先遍历
 * @param treeData
 * 深度优先遍历是先把一个节点和所有子节点都遍历完毕，再回头遍历同级节点。
 */
function dfs(treeData) {
    console.log(treeData.val)
    treeData.children.forEach(dfs)
}
dfs(tree)

/**
 * 广度优先算法(利用队列来实现)
 * @param treeData
 * 思路：
 * 1、新建一个队列，把根节点入队
 * 2、把对头出队并访问
 * 3、把对头的children挨个入队
 * 4、重复第二、三步，直到队列为空
 */
function bfs(treeData) {
    const q = [treeData]
    while (q.length) {
        const n = q.shift()
        console.log(n.val)
        n.children.forEach(item => {
            q.push(item)
        })
    }
}
console.log('广度优先算法。。。。')
bfs(tree)
