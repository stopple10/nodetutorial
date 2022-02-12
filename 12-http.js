const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/') {
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('About us');
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't find the page</p>
    <a href="/">
    `);
})

server.listen(5000);