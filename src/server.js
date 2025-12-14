import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Test Servergit');
});

server.listen(3333);
