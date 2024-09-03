import express from 'express';
import fs from 'fs'
import multer from 'multer'
const router = express.Router();
const store = multer.diskStorage({
    // 指定文件存储目录
    destination: (req, file, cb) => {
        // 相对于启动路径
        const dir = '../newFold'
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
            console.log(fs.existsSync(dir))
        }
        cb(null, dir)
    },
    // 指定文件命名规则
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop() // 获取文件后缀名
        cb(null, `${Date.now()}.${ext}`)
    }
})
const upload = multer({
    storage: store,
    limits: { fileSize: 1024 * 1024 * 5 }, //文件大小限制
    fileFilter: (req, file, cb) => {
        // fileFilter() 函数指定了文件类型过滤规则
        // 拒绝上传非图片类型的文件
        if (!file.mimetype.startsWith('image/')) {
            const err = new Error('Only image files are allowed!') // 错误的具体信息
            err.status = 400 // 设置错误状态码为 400
            return cb(err, false)
        }
        return cb(null, true)
    }
})
// single() 方法用于处理单文件上传
router.post('/upload',upload.single('file'), (req, res) => {
    res.json({ message: '文件上传成功', data: req.file })
})
export default router