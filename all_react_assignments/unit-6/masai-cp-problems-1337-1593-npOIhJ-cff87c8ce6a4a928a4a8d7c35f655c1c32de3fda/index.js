const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.';

  if (req.url !== '/') {
    console.log(req)
    filePath = path.join(filePath, req.url);
    console.log(filePath)
  }

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      // If the requested URL is a directory, list its contents
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(err);
          return;
        }

        let data = '<ul>';
        files.forEach((file) => {
          let fileType = '';
          let fileIcon = '';
          let href = path.join(req.url, file);

          if (fs.statSync(path.join(filePath, file)).isDirectory()) {
            fileType = 'Directory';
            fileIcon = '&#128193;';
          } else {
            fileType = 'File';
            fileIcon = '&#128441;';
          }

          data += `<li><a href="${href}">${fileIcon} ${file} (${fileType})</a></li>`;
        });
        data += '</ul>';

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      // If the requested URL is a file, return its contents
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(err);
          return;
        }
else{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
}
       
      });
    }
    
  });
});
// server.listen(4500,()=>{
//     console.log("server is running at port 4500")
// })
module.exports = server;
