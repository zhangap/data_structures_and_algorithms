import {reverseWords} from '../code/reverseWords.js';


const str = `Hello my name is zhangaiping, I'm 32 years old`
test('测试字符串反转', () => {
    let result = reverseWords(str);
    // console.log(result)
    expect(result).toBe(`olleH ym eman si ,gnipiagnahz m'I 23 sraey dlo`);
})
