/**
 * 卡牌分组
 * @param arr
 * @returns {string}
 */
function cardGroup(arr) {
    let min = Number.MAX_SAFE_INTEGER
    let result = true
    //先将数组进行排序
    arr = arr.sort((a,b) => a-b )
    let tempArr = []
    const resultArr = []
    for (let i = 0, len = arr.length; i < len ; i++) {
        tempArr.push(arr[i])
        // 循环判断下一个值跟当前值是不是相等，如果相等的话，直接放在临时数组中，直到找到不相等的，并记录最小分组里面的个数
        for (let j = i+1; j < len-1 ; j++) {
            if(arr[i] === arr[j]) {
                tempArr.push(arr[j])
            } else {
                if(min > tempArr.length) {
                    min = tempArr.length
                }
                resultArr.push([...tempArr])
                tempArr.length = 0
                i = j - 1
                break
            }
        }
    }
    // console.log(resultArr)
    // 只要最小分组个数能和其他的分组个数整除、说明分组是成功的
    resultArr.every(arr => {
        if(arr.length % min !== 0) {
            result = false
            return false
        }
        return true
    })
    return result
}

/**
 * 卡牌分组2（性能更高）
 * @param arr
 * @returns {boolean}
 */
function cardGroup2(arr) {
    debugger
    let map = {}
    arr.forEach(value => {
        let tempArr = map[value]
        if(tempArr) {
            tempArr.push(value)
        }else {
            tempArr = [value]
        }
        map[value] = tempArr
    })
    let arrLen = []
    Object.values(map).forEach(arr => {
        arrLen.push(arr.length)
    })
    map = null
    const min = Math.min(...arrLen)
    let result = true
    arrLen.every(value => {
        if(value % min !== 0) {
            result = false
            return false
        }
        return true
    })
    return result
}

let tempArr = [1,2,3,4]
const testArr = []

for (let i = 0; i < 15000; i++) {
    testArr.push(...tempArr)
}
// testArr.push(3)
console.time('cardGroup')
console.log(cardGroup(testArr))
console.timeEnd('cardGroup')

console.time('cardGroup2')
console.log(cardGroup2(testArr))
console.timeEnd('cardGroup2')


