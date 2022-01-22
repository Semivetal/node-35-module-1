const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('tiny'));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
  next();
})

// реалізація валідації !!!
app.post('/home', (req, res) => {
  if (!req.body.goit) {
    return res.status(400).json({status: 'goit parameter is required'})
  }
  res.json({ javascript: 'object', body: req.body });
}) 

app.listen(PORT, (err) => {
    if (err) console.error('Error at server launch', err);
    console.log(`Server works at port ${PORT}`);
}); 

/* 
app.get('/home', (req, res) => {
  res.json({ javascript: 'object' });
}); 
*/

/* 
app.get('/home', (req, res) => {
  res.send('get request');
});

app.post('/home', (req, res) => {
  res.send('post request');
});

app.delete('/home', (req, res) => {
  res.send('delete request');
});

app.use((req, res) => {
  res.send('all requests');
}); 
*/

/* 
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const path = require('path');

const contentType = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

http
  .createServer(async (req, res) => {
    const { pathname } = url.parse(req.url);
    let filename = pathname.substring(1);
    if (pathname === '/') {
      filename = 'index.html';
    }
    const type = contentType[path.extname(filename)];
    res.writeHead(200, { 'Content-Type': type });
    if (type.includes('image')) {
      const img = await fs.readFile(filename);
      res.write(img, 'hex');
    } else {
      const content = await fs.readFile(filename, 'utf8');
      res.write(content);
    }
    res.end();
  })
  .listen(3000, () => console.log('Listen server on port 3000')); 
  */