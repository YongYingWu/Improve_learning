const http = require('http')
const Url = require('url')

const server = http.createServer((req,res) => {
  // 解决中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  // 获取请求头
  const { method, url, headers, httpVersion } = req

  //url.parse为旧版 解析url(为true会将query变为一个对象)
  const { pathname, query } = Url.parse(req.url, true)
  console.log(pathname, query)

  // 实例化URL对象（recommend）
  const u = new URL(url,'http://127.0.0.1:8800')
  // new URLSearchParams()
  console.log(u.pathname,u.searchParams,u.searchParams.get('param'))

  if (u.pathname === '/login') {
    res.end('login')
  } else if (u.pathname === '/register') {
    res.end('register')
  } else if(method === 'POST') {
    // 获取请求体
    let body = ""
    req.on('data', (chunk) =>{
      body += chunk
    })
    req.on('end', () => {
      console.log(body)
      res.end('hello world')
    })
  } else {
    res.end('hello world')
  }

})

server.listen(80, () => {
  console.log('server is running at http://localhost:3000')
})