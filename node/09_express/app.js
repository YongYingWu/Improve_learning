import express from 'express';
import test from './routes/test.js';
import sys from './routes/sys.js';
import response from './routes/response.js';
import header from './routes/header.js';
import upload from './routes/upload.js';
const app = express();
const post = 80
// .json中间件用来解析body的数据，这是因为 express 默认不支持解析传递的请求体（body）数据
app.use(express.json())
// app.use 放在接口前，当作中间件
app.use((req,res,next) => {
    const { query, body, params } = req
    req.query.tmp = 1
    console.log(query, body, params)
    next()
})
app.use(express.static('public'))
test(app) // 普通模式
app.use('/sys', sys) // Router模式 // 将路由注册到/sys下，所有路由都会带上/sys
app.use('/res', response) // 响应数据
app.use('/header', header) // 请求头
app.use(upload) // 文件上传

app.listen(post, () => {
    console.log(`server is running at http://localhost:${post}`)
})
