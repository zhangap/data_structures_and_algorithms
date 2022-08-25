class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

/**
 * 两个数相加(这里的两个数都是用链表存起来的)
 * @param l1
 * @param l2
 */
function addTwoNumbers(l1, l2) {
    let p1 = l1
    let p2 = l2
    let l3 = new Node(0)
    let p3 = l3
    let carry = 0
    while (p1 || p2) {
        const val1 = p1 ?  p1.val : 0
        const val2 = p2 ? p2.val: 0
        const result = Number(val1) + Number(val2) + carry
        // 如果result小于10，说明不用进位，如果大于等于10，则需要进位
        let nextNode = null
        if(result < 10) {
            nextNode = new Node(result)
            carry = 0
        } else {
            nextNode = new Node(result - 10)
            carry = 1
        }
        p3.next = nextNode
        p1 = p1 ? p1.next : null
        p2 = p2 ? p2.next : null
        p3 = p3.next
    }
    // 最后判断carry是否有值,如果有值，还要继续进位
    if(carry) p3.next = new Node(carry)
    return l3.next
}

/**
 * 初始化两个数,并用链表存起来
 * @param num1
 * @param num2
 * @returns {{l1: null, l2: null}}
 */
function initTwoNumbers(num1, num2) {
   return {
       l1:numReverseLink(num1),
       l2:numReverseLink(num2)
   }
}
function numReverseLink(num) {
    const arr = `${num}`.split('').reverse()
    let list = null
    let p = null
    for (let i = 0; i < arr.length ; i++) {
        if(i === 0) {
            list = new Node(arr[i])
            p = list
        }else {
            p.next = new Node(arr[i])
            p = p.next
        }
    }
    return list
}
var {l1, l2} = initTwoNumbers(722, 465)
console.log(addTwoNumbers(l1,l2))
var {l1, l2} = initTwoNumbers(342,465)
console.log(addTwoNumbers(l1, l2))
debugger
