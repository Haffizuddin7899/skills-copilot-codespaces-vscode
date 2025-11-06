// Create web server 
const http = require('http');
const port = 3000;

// Sample comments data
let comments = [
    { id: 1, text: "This is the first comment." },
    { id: 2, text: "This is the second comment." }
];

// Create server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
