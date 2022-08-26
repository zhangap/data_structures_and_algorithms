/**
 * 给定一个整数数组，然后给定一个目标值，计算数组中是否有两个数相加等于目标值的数据，有的话，返回对应的坐标
 * @param arr
 * @param target
 */
function toSum(arr, target) {
    const map = new Map()
    for (let i = 0, len = arr.length; i < len; i++) {
        const currVal = arr[i]
        const num2 = target - currVal
        if(map.has(num2)) {
            return [map.get(num2),i]
        }else {
            map.set(currVal,i)
        }
    }
    return []
}

console.log(toSum([1,2,5,7,9], 7))
