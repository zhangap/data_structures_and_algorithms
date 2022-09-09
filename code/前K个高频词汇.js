import {MinHeap} from "./MinHeap.js";


/**
 * 返回前k个高频词汇(通用版本)
 * @param nums
 * @param k
 */
function topKFrequent(nums, k) {
    const map = new Map()
    nums.forEach(item => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1)
    })
    const arr = Array.from(map).sort((a,b) => { return b[1] - a[1]})
    return arr.slice(0,k).map(item =>  item[0]);
}

const nums = ['d', 'd','b','c','d','a','b']
console.log(topKFrequent(nums,2))


/**
 * 返回前k个高频词汇（最小堆实现）
 * @param nums
 * @param k
 */
function topKFrequent2(nums, k) {
    const map = new Map()
    nums.forEach(item => {
        map.set(item, map.has(item) ? map.get(item) + 1 : 1)
    })
    const h = new MinHeap(true)
    map.forEach((value,key) => {
        h.insert({val: value, key})

        if(h.size() > k) {
            h.pop()
        }
    })
    return h.heap.map(item => item.key)
    // console.log(h)
}
  console.log(topKFrequent2(nums,2))
