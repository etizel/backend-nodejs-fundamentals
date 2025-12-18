import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if ((method === 'GET') & (url === '/users')) {
    return res.end('Listagem de usuários');
  }
  if ((method === 'POST') & (url === '/users')) {
    return res.end('Postagem de usuários');
  }

  return res.end('Test Server');
});

server.listen(3333);
