/**
 * 给定一个字符串，判断是否是有效的字符串
 * @param str
 * 有效： [] {} () ([{}])
 */
const symbolStartArr = ['(', '[', '{']
function isValid(str) {
    const stack = []
    str = trim(str)
    for (let i = 0, len = str.length; i < len; i++) {
        const w = str[i]
        // 把起始括号压入栈中
        if(symbolStartArr.includes(w)) {
            stack.push(w)
        } else {
            // 获取栈顶最上的一个数据
            const top = stack[stack.length-1]
            if(
                (w === ')' && top === '(') ||
                (w === ']' && top === '[') ||
                (w === '}' && top === '{' )
            ){
                stack.pop()
            }
        }
    }
    return stack.length === 0
}
//通过字典重构括号匹配问题
const map = new Map()
map.set('(', ')')
map.set('[', ']')
map.set('{', '}')
function isValid2(str) {
    const stack = []
    str = trim(str)
    for (let i = 0; i < str.length ; i++) {
        const w = str[i]
        if(map.has(w)) {
            stack.push(w)
        } else {
            const topW = stack[stack.length-1]
            if(w === map.get(topW)) {
                stack.pop()
            }
        }
    }
    return stack.length === 0
}
// 去除所有的空格
function trim(str) {
    return str.replace(/\s+/g,'');
}

console.log('测试----------')
// console.log(isValid('  [( )  adcddd]'))
// console.log(isValid('(()'))

debugger
console.log(isValid2('  [( )  adcddd]'))
console.log(isValid2('(()'))

