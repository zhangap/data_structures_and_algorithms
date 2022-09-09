import {MinHeap} from "./MinHeap.js";


/**
 * 找出数组中第k个最大元素(利用最小堆来实现)
 * @param nums
 * @param k
 */
function findKthLargest(nums, k) {
    const h = new MinHeap()
    nums.forEach(item => {
        h.insert(item)
        // 如果堆的大小大于k，这个时候就要弹出移除堆顶元素
        if(h.size() > k) {
            h.pop()
        }
    })
    // 弹出堆顶元素
    return h.peek()
}

/**
 * 找出数组中第k个最大元素（先排序，直接获取）
 * @param nums
 * @param k
 * @returns {*}
 */
function findKthLargest2(nums, k) {
    nums.sort((a,b) => b- a)
    return nums[k-1]
}

const nums = [3,2,1,5,6,4]
debugger
console.log(findKthLargest(nums,3))
console.log(findKthLargest2(nums,3))
