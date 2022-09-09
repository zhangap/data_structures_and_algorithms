import {MinHeap} from "./MinHeap.js";

class Node {
    constructor(value) {
        this.val = value
        this.next = null
    }
}

// 构造测试数据
// [
//     1->4->5,
//     1->3->4,
//     2->6
// ]
let node1 = new Node(1)
let node2 = new Node(4)
let node3 = new Node(5)
node1.next = node2
node2.next = node3

let list1 = node1

node1 = new Node(1)
node2 = new Node(3)
node3 = new Node(4)
node1.next = node2
node2.next = node3

let list2 = node1

node1 = new Node(2)
node2 = new Node(6)
node1.next = node2

let list3 = node1

/**
 * 合并k个链表
 * @param lists 链表集合
 */
function mergeKLists(lists) {
    const res = new Node(0)
    // 指针
    let p = res
    const h = new MinHeap(true)
    lists.forEach(list => {
        if(list) h.insert(list)
    })

    while (h.size()) {
        const n = h.pop()
        p.next = n
        p = p.next
        if(n.next) h.insert(n.next)
    }
    return res.next
}


console.log(mergeKLists([list1,list2,list3]))
debugger
