process.on('message', (msg) => {
    console.log('child got message:', msg)
    process.send({ hello: 'child got' })
})