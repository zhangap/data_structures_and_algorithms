/**
 * 字符串重复匹配
 * @param str
 */
function strIsRepeat(str) {
    const reg = /^(\w+)\1+$/
    return reg.test(str)
}
console.log(strIsRepeat('abcabc'))
console.log(strIsRepeat('abcabcd'))
