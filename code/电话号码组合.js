/**
 * 电话号码组合
 * @param str 2-9的组合
 */
export default function combFn(str) {
    const arr = str.split('')
    // 如果str组合小于2，没比要计算
    if(arr.length < 2) return []
    const wordArr = []
    arr.forEach(num => {
        wordArr.push(map.get(num))
    })
    let tempArr = wordArr[0]
    // console.log(wordArr)
    for (let i = 1; i < wordArr.length ; i++) {
       tempArr= toComb(tempArr, wordArr[i])
    }
    return tempArr
}

/**
 * 组合函数
 * @param arr1
 * @param arr2
 */
function toComb(arr1, arr2) {
    const resultArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            resultArr.push(`${arr1[i]}${arr2[j]}`)
        }
    }
    return resultArr
}

// 基础数据维护，数据格式规定成这样，方便日后获取
const map = new Map()
map.set('2', ['a', 'b','c'])
map.set('3', ['d', 'e','f'])
map.set('4', ['g', 'h','i'])
map.set('5', ['j', 'k','l'])
map.set('6', ['m', 'n','o'])
map.set('7', ['p', 'q','r','s'])
map.set('8', ['t','u','v'])
map.set('9', ['w','x','y', 'z'])

// console.log(combFn('234'))
