const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Extract path and query parameters
    const path = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    // Print the path and query parameters
    console.log('Path:', path);
    console.log('Query Parameters:', queryParams);

    // Send a response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Received request\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
