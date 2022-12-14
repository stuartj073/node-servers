const http = require('http');
const fs = require('fs');
const { parse } = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/") {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }

    if(req.url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            // fs.writeFileSync('message.txt', message) - slows down code
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write('<body><h1>Welcome</h1></body>')
    res.write('</html>')
    res.end();

    // process.exit();  this will stop the node event loop;
});

server.listen(3000);
