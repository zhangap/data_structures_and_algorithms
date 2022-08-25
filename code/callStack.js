function fn1() {

}
function fn2() {
    fn1()
}
function fn3() {
    fn2()
}

function test() {
    console.log('函数开始执行')
    fn3()
}

test()
