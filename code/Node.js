let count = 0
export class Node {
    constructor(val) {
        this.id = `id-${count++}`
        this.val = val
        this.next = null
    }
}
