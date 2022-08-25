class RecentCounter{
    constructor() {
        this.count = []
    }
    ping(time) {
        this.count.push(time)
        while (this.count[0] < time - 3000) {
            this.count.shift()
        }
        return this.count.length
    }
}
debugger
const counter = new RecentCounter()
console.log(counter.ping(1))
console.log(counter.ping(100))
console.log( counter.ping(3001))
console.log(counter.ping(3002))
