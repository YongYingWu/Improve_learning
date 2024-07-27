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
  // 4.文件读取(同步 + 异步)
  fs.readFile('./ws_test.txt', (_,data) => {
    // 值是一个buffer
    console.log(data.toString())
  }) // (fileName, options, callback(status, data))
  // const data = fs.readFileSync('./ws_test.txt',)

  // 流式读取 // 64kb/次
  const rs = fs.createReadStream('./fs_test2.txt')
  rs.on('data', (chunk) => {
    // Buffer
    console.log(chunk.toString())
  })
  rs.on('end', ()=> {})
}
// read()

function copyFile() {
  fs.readFile('./fs_test2.txt', (status,data) => {
    fs.writeFile('./fs_test.txt', data, {flag: "a"}, (res) => {
      console.log(res)
    })
  })

  // 
  const rs = fs.createReadStream('./fs_test2.txt')
  const ws = fs.createWriteStream('./ws_test.txt')
  rs.on('data', (chunk) => {
    ws.write(chunk)
  })

  // rs.pipe(ws) 读取流通过管道给写入流
}
// copyFile()

// 文件读取和移动fs.rename(异步 + 同步)
function renameAndMove() {
  //  1. 重命名
  // fs.rename('./fs_test.txt', './fs_test_rename.txt', (status) => {
  //   console.log(status)
  // })

  // 2.移动
  fs.rename('./fs_test_rename2.txt', './fold2/fs_test_rename2.txt', (status) => {
    console.log(status)
  })
}
// renameAndMove()

// 文件删除(异步 + 同步)
function delFile() {
  // fs.unlink('./ws_test.txt', status => {})
    fs.rm('./fs_test2.txt', status => {}) // node > v14.4
}
// delFile()

// 文件夹操作
function foldOpt() {
  // 创建 (path option callback)
  // fs.mkdir('./newFold', status => {})
  // 递归创建
  // fs.mkdir('./newFold/a/b/c', {recursive: true}, status => {})

  // 文件夹读取
  fs.readdir('./newFold', (status, files) => {
    // 文件名数组
    console.log(files)
  })

  // 删除文件夹(recursive将被移除，推荐使用fs.rm)
  fs.rmdir('./newFold/a', {recursive: true}, status => {
    console.log(status)
  })
}
// foldOpt()

// 查看资源信息
function lookStatus() {
  fs.stat('./fs_test_rename2.txt', (status, data) => {
    if (status) {
      console.log(status)
    } else {
      console.log(data)
      console.log(data.isFile())
      console.log(data.isDirectory())
    }
  })
}
// lookStatus()
console.log(__dirname)