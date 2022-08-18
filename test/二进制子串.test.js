import {calcBinarySubStr} from "../code/计算二进制子串.js";

test('计算二进制子串(00110011)', () => {
    expect(calcBinarySubStr('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})

test('计算二进制子串(10101)', () => {
    expect(calcBinarySubStr('10101')).toEqual(['10', '01', '10', '01'])
})
