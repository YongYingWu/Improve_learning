const path = require('path')
const fs = require('fs')
console.log(__dirname + '/02_fs.js')
// path.resolve 拼接规范的绝对路径
console.log('resolve', path.resolve(__dirname, '02_fs.js'))

// sep 获取操作系统的路径分隔符
console.log('sep', path.sep)

// parse 解析路径返回一个对象
console.log('parse', path.parse(__filename))

// basename 获取文件名
console.log('basename', path.basename(__filename))

// dirname 获取文件所在的目录
console.log('dirname', path.dirname(__filename))

// extname 获取文件扩展名
console.log('extname', path.extname(__filename))