/**
 * 种花问题
 * @param arr
 * @param n
 * 建模说明： arr表示地块，arr里面的数据表示是否已经种花0是没有种花，1是已经种花了，两个响铃的不能种花
 */
function flower(arr, n) {
    if (!arr.length) return false
    let max = 0
    for (let i = 0, len = arr.length; i < len -1 ; i++) {
        // 只有位置为0的时候才有必要判断是否可以种花
        if(arr[i] === 0) {
            // 如果第一个是0，第二个也是0，那么第一个位置是可以栽花的
            if(i === 0 && arr[i +1] === 0) {
                max++
                i++
            }else {
                if(arr[i-1] === 0 && arr[i+1] === 0) {
                    max++
                    i++
                }
            }
        }
    }
    return max >= n
}

console.log('测试代码-----------')
let result = flower([1, 0, 0, 0, 1], 1)
console.log(result)
result = flower([1, 0, 0, 0, 1], 2)
console.log(result)
