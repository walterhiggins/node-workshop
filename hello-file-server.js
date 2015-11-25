// hello-file-server.js
var http = require('http'),
    fs = require('fs');

function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  fs.createReadStream('./package.json').pipe(response);
}
var server = http.createServer( onRequest );
server.listen(8000);
