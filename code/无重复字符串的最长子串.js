/**
 * 给定一个字符串，请你找出其中不含有重复字符串的最长子串的长度
 * @param str
 */
function lengthOfLongestSubstring(str) {
    // 记录开始指针
    let startIndex = 0
    // 记录最长字符串子串
    let maxLength = 0
    const map = new Map()
    for (let i = 0; i < str.length ; i++) {
        const w = str[i]
        if(map.has(w) && map.get(w) >= startIndex) {
            startIndex = map.get(w) + 1
        }
        maxLength = Math.max(maxLength, i - startIndex + 1)
        map.set(w, i)
    }
    return maxLength
}

/**
 * 给定一个字符串，获取这个字符串中不包含有重复子串的最长子串.
 * @param str
 */
function getLongestSubstring(str) {
    // 初始一个集合，用来记录比对是否有重复的子串
    const map = new Map()
    const tempSet = new Set()
    const arr = []
    for (let i = 0; i < str.length ; i++) {
        const w = str[i]
        if(map.has(w)) {
            map.clear()
            if(tempSet.size) {
                arr.push([...tempSet].join(''))
                tempSet.clear()
            }
        }
        tempSet.add(w)
        map.set(w,i)
    }
    if(tempSet.size) {
        arr.push([...tempSet].join(''))
    }
    return arr
}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('abbcdea'))

console.log(getLongestSubstring('abcabcbb'))
console.log(getLongestSubstring('abbcdea'))
debugger
