const http = require('http');

const server = http.createServer((req, res) => {
  // send a response
  res.write('Hello world\n');
  res.end();
});

server.listen(4000);

