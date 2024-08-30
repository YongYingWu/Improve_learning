// a. url
    // const url = require('url')
    // 1. url.parse(urlStr) 解析url返回一个URL对象
    // 2.url.URL(urlStr) 生成一个URL对象,同全局URL


// b. timers
// immediate 传递给 setImmediate 函数的回调将在事件队列上的下一次迭代中执行。
// 另一方面，回调传递给 process.nextTick 在下一次迭代之前以及程序中当前运行的操作完成之后执行
// 在应用程序启动时，开始遍历事件队列之前调用它的回调。
// 因此，回调 process.nextTick 总是在 setImmediate 之前调用。                
// 原文链接：https://blog.csdn.net/terrychinaz/article/details/113780065
    // setTimeout()
    // setInterval()
    // setImmediate()
    // process.nextTick()

// c. readline questionc 一次问答
function readlineQuestion() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('What do you think of Node.js? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`)
        rl.close()
    })
}
// readline write 标准输出
function readlineWrite() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.write('just write some things')
    rl.close()
}
// 多次问答
function readlinePrompt() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.setPrompt('What do you think of Node.js? ')
    rl.prompt()
    rl.on('line', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`)
        if (answer === 'exit') rl.close()
       
        else {
            console.log('What do you think of Node.js2? ')
            // rl.prompt()
        }
    })
    rl.on('close', () => {
        console.log('Have a great day!')
        process.exit(0)
    })
}
// readlineQuestion()
// readlineWrite()
// readlinePrompt()

// d. crypto
function hashTest() {
    const crypto = require('crypto')
    // hex, base64, 空则buffer
    const hash = crypto.createHash('sha256').update('我是要加密的内容').digest('base64')
    console.log(hash)
}
function cipherTest() {
    const crypto = require('crypto')
    const algorithm = 'aes192' // 加密算法
    const password = crypto.randomBytes(32) // 32字节密码 （128 192 256位 ）
    const iv = crypto.randomBytes(16) // 16字节向量 正常128位16字节
    const cipher = crypto.createCipher(algorithm, password, iv)
    // update进行加密
    let encrypted = cipher.update('我是加密密文', 'utf8', 'hex')
    encrypted += cipher.final('hex')
    console.log(encrypted)
    const decipher = crypto.createDecipher(algorithm, password, iv)
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    console.log(decrypted)
}
// hashTest()
cipherTest()