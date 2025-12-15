import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Test Server');
});

server.listen(3333, () => {
  console.log('🚀 Servidor iniciado na porta 3333');
});
