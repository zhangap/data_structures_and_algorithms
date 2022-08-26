import {Node} from "./Node.js";

/**
 * 构造链表
 * @param arr
 * @returns {Node}
 */
function createLinkList(arr) {
    const linkList = new Node(arr[0])
    let p = linkList
    for (let i = 1; i < arr.length ; i++) {
        p.next = new Node(arr[i])
        // 指针后移
        p = p.next
    }
    return linkList
}

/**
 * 删除重复元素
 * @param head
 * 备注：这里的链表是有序链表，请注意
 */
function deleteDuplicates(head) {
    let p = head
    while (p && p.next) {
        // 这里要用条件控制语句，只有当前节点和下个节点的值不相等的时候，才移动循环的指针，否则有多个重复的值，会被跳过,具体可以看测试2
        if(p.val === p.next.val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
        // if(p.val === p.next.val) {
        //     p.next = p.next.next
        // }
        // p = p.next
    }
    return head
}
// 测试用例1
// let linkList = createLinkList([1,1,2,3,3])
// console.log(linkList)
// console.log(deleteDuplicates(linkList))

// 测试用例2
let linkList = createLinkList([1,1,1,1,1,1,1,2,2,2,2,2])
console.log(linkList)
debugger
console.log(deleteDuplicates(linkList))
debugger
