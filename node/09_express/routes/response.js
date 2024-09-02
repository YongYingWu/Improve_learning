// 响应数据
import express from 'express'
const router = express.Router()
// 1. res.send() 任意数据
router.get('/send', (req, res) => {
    res.send('hello', {name: 'tom', age: 18})
})

// 2. res.json() JSON数据
router.get('/json', (req, res) => {
    res.json({name: 'tom', age: 18})
})

// 3. res.download() 下载文件
router.get('/download', (req, res) => {
    res.download('./package.json')
})
export default router