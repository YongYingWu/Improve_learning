import express from 'express';
const router = express.Router();
router.get('/info', (req, res) => {
    res.json(req.headers)
})
router.get('/setHeaderToken', (req, res) => {
    res.set('token', '123456')
    res.send('token set ok')
})
export default router;