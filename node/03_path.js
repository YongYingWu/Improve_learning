const path = require('path')
const fs = require('fs')
console.log(__dirname + '/02_fs.js')

// *************
// __dirname 获取执行的脚本所在目录 脚本在哪
// path.resolve('.')获取运行脚本时所在的目录 我在哪
// *************

// path.resolve 拼接规范的绝对路径
console.log('resolve', path.resolve(__dirname, '02_fs.js'))
console.log('resolve', path.resolve('02_fs.js'))
console.log('resolve', path.resolve('/a//b///02_fs.js'))

// sep 获取操作系统的路径分隔符, window \  linux /
console.log('sep', path.sep)

// 推荐使用join来拼接
console.log('join', path.join('a', 'b', 'c'))

// parse 解析路径返回一个对象
console.log('parse', path.parse(__filename))

// basename 获取文件名
console.log('basename', path.basename(__filename))

// dirname 获取文件所在的目录
console.log('dirname', path.dirname(__filename))

// extname 获取文件扩展名
console.log('extname', path.extname(__filename))

// normalize 规范路径 // resolve?
console.log('normalize', path.normalize('/a/a///c//cd'))