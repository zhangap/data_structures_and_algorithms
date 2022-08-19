import combFn from "../code/电话号码组合.js";

test('电话号码组合23', () => {
    expect(combFn('23')).toEqual(['ad','ae', 'af','bd', 'be', 'bf', 'cd', 'ce','cf'])
})

test('电话号码组合234', () => {
    expect(combFn('234')).toEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ])
})
