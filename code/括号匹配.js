/**
 * 给定一个字符串，判断是否是有效的字符串
 * @param str
 * 有效： [] {} () ([{}])
 */
const symbolStartArr = ['(', '[', '{']
const symbolEndArr = [')', ']', '}']
function isValid(str) {
    const stack = []
    str = trim(str)
    // 如果去除空格以后，字符串为奇数，说明不是合格的字符串
    if(str.length % 2 !== 0) return false
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

function trim(str) {
    return str.replace(/^\s+|\s+$/gm,'');
}

console.log('测试----------')
console.log(isValid('[()]'))
console.log(isValid('(()'))
