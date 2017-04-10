/* ------modified code form class, not working correctly...

var http = require("http"), fs = require("fs");

http.createServer(function(req,res) 
{
    
  var path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
          fs.readFile(__dirname + 'home.html', function(err, data){      
          });
      res.end(data);
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
                }
    
}).listen(process.env.PORT || 3000);
*/

var http = require("http"); 
http.createServer(function(req,res) {
  var path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is the home page');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is the about page');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);