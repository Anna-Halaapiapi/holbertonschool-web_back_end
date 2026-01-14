// node HTTP server

// 1. import built-in http module
const http = require('http');

// 2. define host name and port
const hostName = '127.0.0.1'; // localhost
const port = 1245;

// 3. create server
const app = http.createServer((req, res) => {
  // set response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// 4. start server and listen for incoming requests
app.listen(port, hostName, () => {
});

// 5. export server
module.exports = app;
