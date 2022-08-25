const a = {value: 'a'}
const b = {value: 'b'}
const c = {value: 'c'}
const d = {value: 'd'}

// 构造链表
a.next = b
b.next = c
c.next = d

debugger
console.log(a)

// 在c和d之间插入一个temp
const temp = {value: 'temp'}
c.next = temp
temp.next = d
console.log(a)
console.log('end------')
