// 最小堆的实现
export class MinHeap {
    constructor(isObj = false) {
        this.heap = []
        // 标记存储的是否是对象
        this.isObj = isObj
    }
    // 插入元素
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    // 上移操作
    shiftUp(index) {
        if(index === 0) return
        const parentIndex = this.getParentIndex(index)
        // 如果父节点的值比当前节点要大，则交换两者的位置
        if(this.isObj ? (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) : (this.heap[parentIndex] > this.heap[index])){
            this.swap(parentIndex, index)
            // 递归上移操作，直至父节点小于等于当前节点
            this.shiftUp(parentIndex)
        }
    }
    // 获取父节点的下标
    // 父节点的位置：（index-1)/2
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    // 交换两个元素
    swap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    // 删除堆顶元素，把最后一个元素给堆顶元素，然后进行下移，直至满足最小堆的条件
    pop() {
        if(this.heap.length ===1) {
            return this.heap.pop()
        } else {
            let res = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.shiftDown(0)
            return res
        }
    }
    // 上移操作
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)

        if(this.isObj ? (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) : (this.heap[leftIndex] < this.heap[index])) {
            this.swap(leftIndex,index)
            this.shiftDown(leftIndex)
        }
        if(this.isObj ? (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) : (this.heap[rightIndex] < this.heap[index])) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    // 获取左子节点的下标
    // 左侧子节点的位置是2*index+ 1
    getLeftIndex(index) {
        return  2 * index + 1
    }
    // 获取右子节点的下标
    // 右侧子节点的位置是2*index + 2
    getRightIndex(index) {
        return 2 * index + 2
    }
    // 获取堆顶
    peek() {
        return this.heap[0]
    }
    // 获取堆的大小
    size() {
        return this.heap.length
    }
}


const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
