const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  let url = request.url;
  if (url === "/") {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      response.end(data);
    });
  } else if (url === '/menShop') {
    fs.readFile(path.join(__dirname, 'menShop.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      response.end(data);
    });
  } else if (url === '/womenShop') {
    fs.readFile(path.join(__dirname, 'womenShop.html'), 'utf-8', (err, data) => {
        if (err) throw err;
        response.end(data);
      });
  } else if (url === '/contacts') {
    fs.readFile(path.join(__dirname, 'contacts.html'), 'utf-8', (err, data) => {
      if (err) throw err;
      response.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Node JS app is Started at http://${hostname}:${port}`);
});
