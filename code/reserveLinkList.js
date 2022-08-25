
const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const d = {val: 'd'}
const e = {val: 'e'}
a.next = b
b.next = c
c.next = d
d.next = e
e.next = null

/**
 * 链表反转
 * @param head
 */
function reserveLinkList(head){
    let p1 = head
    let p2 = null
    while (p1) {
        const temp = p1.next
        p1.next = p2
        p2 = p1
        p1 = temp
    }
    return p2
}

debugger
console.log(reserveLinkList(a))
debugger
