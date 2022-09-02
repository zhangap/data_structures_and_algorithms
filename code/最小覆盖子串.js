/**
 * 最小覆盖子串
 * @param str
 * @param t 要查找的子串
 * 备注：给定一个字符串S，一个字符串T，请在字符串S里面找出：包含T所有字符串的最小子串
 */
function minWindow(str, t) {
// 左指针
    let leftPoint = 0
// 右指针
    let rightPoint = 0
    const need = new Map()
    // 以子串的单个字符作为key，存储子串中有多少个不同的字符，value是对应的字符出现的次数
    for(let c of t) {
        need.set(c, need.has(c) ? need.get(c) + 1: 1)
    }
    // 子串的种类
    let needType = need.size
    let result = ''
    while (rightPoint < str.length) {
        const c = str[rightPoint]
        if(need.has(c)) {
            need.set(c, need.get(c) -1)
            if(need.get(c) === 0) needType -=1
        }
        while (needType === 0) {
            const res = str.substring(leftPoint, rightPoint+1)
            if(!result || res.length < result.length) {
                result = res
            }
            console.log(res)
            // 获取左指针对应的单个字符，如果此字符是在查找的子串中，意味着只需要移动一次左指针，然后不停的移动有指针，去找到下一个同样的字符
            // 如果左指针对应的单个字符不在要查找的子串中，那么当needType=0的时候，每次移动一次坐指针，对应的字符串就是符合要求的一个子串
            const c2 = str[leftPoint]
            if(need.has(c2)) {
                need.set(c2, need.get(c2) + 1)
                if(need.get(c2) === 1) needType++
            }
            leftPoint++
        }
        rightPoint++
    }
    return result
}

console.log('最终结果',minWindow('ADOBECODEBANC', 'ABC'))


