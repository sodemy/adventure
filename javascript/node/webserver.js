var http = require('http')

http.createServer(function(req, res) {

  // output http header
  res.writeHead(200, {'Content-Type': 'text/plain'})

  // output contents in response
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');
