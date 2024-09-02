import express from 'express'
const router = express.Router()
const post = 80
router.get('/user', (req, res) => {
    res.send('get user')
})
router.get('/menu', (req,res) => {
    res.send('get menu')
})
export default router