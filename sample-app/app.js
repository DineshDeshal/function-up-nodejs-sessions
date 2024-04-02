// To import we use require keyword
const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    let method = req.method;
    if (url === '/') {
        res.write("<h1>Hello this is my first app.</h2>");
        return res.end();
    }
    if (url === '/product') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<form action="/add-product" method="POST"><input type="text" name="name"></input><button type="submit">ADD PRODUCT</button></form>`)
        return res.end();
    }
    if (url === '/add-product' && method === 'POST') {
        res.setHeader('Location', '/');
        let body = res;
        console.log(res);
        return res.end();
    }
})

server.listen(3001);


// --save => production => environment
// --save-dev => dev/test => test environment
// -g => global installation

// npm init => to initialize package.json
// node file_name => to run the node app
// npm install 
// npm install --save express



