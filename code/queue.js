//队列:先进先出
class Queue {
    constructor() {
        this.queue = []
    }
    add(item) {
        this.queue.push(item)
    }
    get() {
        return this.queue.shift()
    }
}

const queue = new Queue()
for (let i = 0; i < 10; i++) {
    queue.add(i)
}

console.log(queue.get())
console.log(queue.get())
