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

var http = require("http"), fs = require("fs"), qs = require('querystring'), books = require('demowk2'); //fs and qs are variables created here
http.createServer(function(req,res) {
    let url =  req.url.split("?"); //create a variable called url, splits the url around the question mark. Becomes an array with two items in it, separated by the ?
    var params = qs.parse(url[1]); //parse the querystring into the piece you need, in this case the 
    console.log(params);
    var path = url[0].toLowerCase();
    switch(path) {
        case '/':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('This is the home page');
          break;
        case '/about':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('This is the about page');
          break;
        case '/search':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Welcome to search');
          break;
        case '/delete':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Delete path');
          break;
        default:
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Not found');
          break;
    }
}).listen(process.env.PORT || 3000); //view this on localhost at http://127.0.0.1:3000/