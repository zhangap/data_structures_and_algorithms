Object.prototype.customName = 'zap'
const obj = {}
console.log(obj.__proto__ === Object.prototype)
console.log(obj.customName)
const fn = () => {}
console.log(fn.__proto__ === Function.prototype)
console.log(fn.customName)
