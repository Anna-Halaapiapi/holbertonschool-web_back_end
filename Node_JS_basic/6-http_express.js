// === small HTTP server using Express === //

// import required module
const express = require('express');

// create instance ofe express application
const app = express();

// define port that server will listen on
const port = 1245;

// routing for '/'
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

// start server and listen for incoming requests
app.listen(port, () => {
});

// export server
module.exports = app;
