const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà ta reum !');
});

server.listen(process.env.PORT || 3000); 