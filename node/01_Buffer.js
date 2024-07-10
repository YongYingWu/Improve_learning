// 1. 创建Buffer
// Buffer单位byte（1byte = 8bit）
const bf_1 = Buffer.alloc(1)
console.log(bf_1)

const bf_unsafe = Buffer.allocUnsafe(1000)
console.log(bf_unsafe)

const bf_3 = Buffer.from('hello')
console.log(bf_3, bf_3[0], 0x68)

// 2. buffer转字符串
console.log(bf_3.toString())
console.log('\x68', '\u0068')

// 3. 溢出ff舍弃高位
bf_3[0] = 0xff33
console.log(bf_3,bf_3.toString())

// 4. Chinese // utf-8 3byte/个
const bf_4 = Buffer.from('你好')
console.log(bf_4, bf_4.toString())