// 总结，不如直接使用axios，直接跳过

const https = require('https')
const util = require('util')
// get请求，返回的是一个流
https.get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',(res) => {
    let content = ''
    res.on('data', (chunk) => {
        content += chunk
    })
    res.on('end', () => {
        console.log(content)
    })
    res.on('error', (err) => {
        console.log(err)
    })
})
// const res = https.get()

// request
https.request({
    method: "",
    port: "443",
    hostname: '', // 域名
    path: ''
}, (res) => {})
// https.request(new URL(), (res) => {})