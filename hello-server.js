// hello-server.js
var http = require('http');
function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.end("Hello World\n");
}
var server = http.createServer( onRequest );
server.listen(8000);
