/**
 * 格雷编码是一个二进制数字系统、在该系统中，两个连续的数值仅有一个位数的差异。
 * 给定一个代表编码总位数的非负整数n，打印其格雷编码序列。格雷编码序列必须是以0开头
 */
function grayCode(n) {
    const make =  n => {
        if(n ===1) {
            return ['0', '1']
        } else {
            let prev = make(n-1)
            let result = []
            let max = Math.pow(2, n) - 1
            for (let i = 0, len = prev.length; i < len ; i++) {
                result[i] = `0${prev[i]}`
                result[max - i] = `1${prev[i]}`
            }
            return result
        }
    }

    return make(n)
}

console.log(grayCode(2))
console.log(grayCode(10))

