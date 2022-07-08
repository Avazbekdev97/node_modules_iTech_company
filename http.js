const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 5000
const localhost = 'localhost'
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('HOME')
        res.end()
    }
    if(req.url == '/users') {
        res.write('<h1>USERS</h1>')
        res.end()
    }
    if(req.url == '/fs') {
        res.write(
            fs.readFileSync(path.join('./fs.js'), 'utf-8')
        )
        res.end()    
    }
})

server.listen(PORT, () => console.log(`Server is running on http://${localhost}:` + PORT))