/**
 * 计算二进制子串
 * @param str
 */
export function calcBinarySubStr(str) {
    const arr = []
    for (let i = 0, len = str.length-1; i < len ; i++) {
        let sub = match(str.slice(i))
        if(sub) {
            arr.push(sub)
        }
    }
    return arr
}

/**
 * 匹配函数
 * @param str
 */
function match(str) {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0]^1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if(reg.test(str)) {
        return RegExp.$1
    } else {
        return ''
    }
}
