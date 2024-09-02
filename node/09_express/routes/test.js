export default function test(app) {
    // 请求 app.METHOD(URL, HANDLE)
    app.get('/hello', (req,res) => {
        res.send('hello world')
    })
    app.get('/about/:id', (req,res) => {
        // 获取路由中的参数(REST参数) /about/123
        console.log(req.params)  // { id: '123' }
        res.send(JSON.stringify(req.query))
    })

    // app.all(URL, HANDLE) 匹配所有的请求方式

    // 路由路径
    // 1. 字符串模式 可以使用 ?(存在或者不存在)、+(连续一个或多个)、*(任意字符0个或多个) 和 () 等特殊字符
    app.get('/a+(bc)+d?a', (req, res) => {
        res.send('string model')
    })
    // 2. 正则表达式模式
    // 匹配路径中含有 world 的路径
    app.get(/regx/, (req, res) => {
        res.send('regx model')
    })

    // app.route()来创建链式路由
    // all 设置所有请求的前置逻辑
    app.route('/user/info').all((req, res, next) => {
        console.log('before')
        next()
    }).get((req, res) => {
        res.send('user info get')
    }).post((req, res) => {
        res.send('user info post')
    })
}