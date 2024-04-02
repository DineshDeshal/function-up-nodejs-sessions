// Import the http module
const http = require('http');

// Creating server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!\n');
});

// Server is accessible on port 3000
server.listen(3000, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});