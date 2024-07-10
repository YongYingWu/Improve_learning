// 文件
const fs = require('fs')
// 场景: 文件下载 安装 日志 编辑器保存 视频录制
function write() {
  
  // 1. 覆盖文件内容写入
  
  // ---options: {flag: "a"}可以追加写入
  // writeFile(fileName, data, options, callback)
  fs.writeFile('./fs_test.txt', 'hello world', (res) => {
    // 写入成功res = null, 失败res = new Error()
    console.log(res)
  })
  
  // 异步fs
  // fs.writeFile() // 异步fs,新增io线程
  
  // 同步fs
  // fs.writeFileSync(fileName, data, options) //无回调，通常通过try-catch捕捉错误
  try {
    fs.writeFileSync('./fs_test.txt', 'hello world2')
  } catch(e) {
    console.log(e)
  }
  
  
  // 2.追加写入(同步 + 异步)同上
  // appendFile/appendFileSync(fileName, data, options, callback)
  fs.appendFile('./fs_test2.txt', ' thanks', (res) => {
    // 写入成功res = null, 失败res = new Error()
    console.log(res)
  })
  
  
  // 3. 流式写入(减少开关文件次数,大文件)
  // 创建流式通道 (path, options)
  const ws = fs.createWriteStream('./ws_test.txt')
  ws.write('hello world')
  ws.write(' thank')
  ws.close()
}

// write()

function read() {
  // 4.文件读取
  fs.readFile('./ws_test.txt', (_,data) => {
    console.log(data.toString())
    // 值是一个buffer
  }) // (fileName, options, callback(status, data))
}
read()
