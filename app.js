const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My first page</title><body><h1>Hello</h1></body></head></html>')
    res.end();

    // process.exit();  this will stop the node event loop;
});

server.listen(3000);
