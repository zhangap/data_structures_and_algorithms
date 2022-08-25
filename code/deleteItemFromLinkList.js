const a = {value: 'a'}
const b = {value: 'b'}
const c = {value: 'c'}
const d = {value: 'd'}
const e = {value: 'e'}
const f = {value: 'f'}

// 构造链表
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

/**
 * 删除链表中的元素
 * @param item
 * 备注：这个必须要求知道链表的整体结构，否则没办法这么做
 */
function deleteItem(item) {
    item.value = item.next.value
    item.next = item.next.next
}

/**
 * 删除链表中的指定元素
 * @param item
 * @param head 链表头部
 */
function deleteItem2(item, head) {
    // 如果链表头部就是指定要被删除的元素，直接把head设置为null
    if(head === item) head = null
    let prevNode = head
    let nextNode = head.next
    while (nextNode) {
        if(nextNode === item) {
            prevNode.next = nextNode.next
            nextNode = null
        } else {
            prevNode = nextNode
            nextNode = nextNode.next
        }
    }
}
debugger
console.log(a)
deleteItem2(c, a)
console.log(a)
debugger
console.log('end-----')
