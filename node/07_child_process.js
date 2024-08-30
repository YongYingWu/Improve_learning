const child_process = require('child_process');

// 1. spanw 启动一个子进程来执行指定的命令，并且可以通过流式数据通信与子进程进行交互
function spanwTest() {
    const { spawnSync, spawn }  = child_process
    // ls 运行时所在目录下的文件
    console.log('start')
    const ls = spawn('ls',['-lh'])
    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
    })
    const lsSync = spawnSync('ls',['-lh'])
    console.log(lsSync.stdout.toString())
    console.log('end')
}

// 2. exec 启动一个 shell，并在 shell 中执行指定命令,适用于命令行工具
function execTest() {
    const { exec, execSync } = child_process
    exec('ls -lh', (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(stdout)
    })
    const execSy = execSync('ls -lh')
    console.log(execSy.toString())
}

// 3.execFile
function execFileTest() {
    const { execFile, execFileSync } = child_process
    // 路径相对于执行时所在的目录
    const file = './tmp/execFile.js'
    execFile(file, (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(stdout)
        console.log(stderr)
    })
    const execFileSy = execFileSync(file)
    console.log(execFileSy.toString())
}

// 4.fork方法 专门用于在 Node.js 中衍生新的进程来执行 JavaScript 文件，并且建立一个与子进程的 IPC 通信管道
function forkTest() {
    const { fork } = child_process
    const child = fork('./tmp/child.js')
    child.on('message', (msg) => {
        console.log('parent got message:', msg)
    })
    child.send({ hello: 'dad got' })
}

// spanwTest()
// execTest()
// execFileTest()
forkTest()
