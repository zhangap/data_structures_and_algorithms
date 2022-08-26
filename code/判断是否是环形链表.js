import {Node} from "./Node.js";

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

/**
 * 判断是否是环形链表
 * @param head
 * 处理思路： 循环比对， 一个快指针，一个慢指针，如果有相逢的，就说明是环形
 */
function hasCycle(head) {
    let p1 = head
    let p2 = head
    while(p1 && p2 &&  p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        if(p1 === p2) return true
    }
    return false
}

// 测试用例1
// a.next = b
// b.next = c
// c.next = d
// console.log(hasCycle(a))
// debugger

//测试用例2
// a.next = b
// b.next = c
// c.next = d
// d.next = b
// console.log(hasCycle(a))
// debugger


// 测试用例3
a.next = b
b.next = a
debugger
console.log(hasCycle(a))

