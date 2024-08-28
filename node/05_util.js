const util = require('util')
// 使用stringify会丢弃函数
// 对象转字符串 // option { depth: x }展开层数
// util.inspect(obj, [option])

// 格式化字符串，类比printf
console.log(util.format('%d + %d = %d', 1, 2, 3)) // '1 + 2 = 3'

// promise转回调
// const a = () => Promise.resolve(2)
// const na = util.callbackify(a)
// na((err, data) => {})

// 回调转promise， 函数要求(尤其是回调参数)，(a,b,c,(err,data) => {})
// const nReadFile = util.promisify(fs.readFile)
// nReadFile('test.txt').then(data => {})