const graph = {
    0: [1,2],
    1:[2],
    2: [0,3],
    3:[3]
};

// 存储已经访问的节点
const visited = new Set()

const dfs = n => {
    console.log(n)
    visited.add(n)
    graph[n].forEach(item => {
        if(!visited.has(item)) {
            dfs(item)
        }
    })
}

dfs(2)
