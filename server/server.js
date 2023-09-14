const http = require('https');
const app = require('./app');
const fs = require('fs');
//const jwt = require('jsonwebtoken');

const port = 3000

const server = http.createServer({
    key: fs.readFileSync('keys/privatekey.pem'),
    cert : fs.readFileSync('keys/certificate.pem')
},app);

server.listen(port)


