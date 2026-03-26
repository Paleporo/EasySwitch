const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 4200;
const indexPath = path.join(__dirname, 'src', 'index.html');

http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(indexPath));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
}).listen(port, () => {
  console.log(`EasySwitch frontend prototype running on http://localhost:${port}`);
});
