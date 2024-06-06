const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(3003, () => {
  console.log('El servidor esta corriendo en el puerto 3003');
  console.log('http://localhost:3003');
});