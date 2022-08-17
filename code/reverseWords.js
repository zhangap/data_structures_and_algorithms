/**
 * 字符串反转1
 * @param str
 * @returns {*}
 */
export function reverseWords(str) {
    let strArr = str.split(' ');

    return strArr.map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}


// /**
//  * 字符串反转2
//  * @param str
//  * @returns {*}
//  */
// export function reverseWords(str) {
//
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }
