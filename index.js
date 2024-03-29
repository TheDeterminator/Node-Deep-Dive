const http = require('http');
const express = require('express');
// const server = express()

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(req.url);
});

// server.get('/test', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Jahti');
// })

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
