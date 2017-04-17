'use strict'
var http = require("http"), fs = require("fs"), qs = require("querystring"); //we need the querystring in the URL. fs and qs are variable we create here
var book = require('./lib/book.js'); //and we need the array from the other file


function serveStatic(res, path, contentType, responseCode){
    if(!responseCode) responseCode = 200; //if successful and no error codes
    fs.readFile(__dirname + path, function(err, data){
        if(err){ //if there's an error
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('500 Server Error'); //tell the user
        }
        else { //if no errors
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data); //proceed to write the content
        }
    });
}


http.createServer((req,res) => {
    let url = req.url.split("?"); //create a variable called url, splits the url around the question mark. Becomes an array with two items in it, separated by the ?
    let params = qs.parse(url[1]); //parse the querystring into the piece you need, in this case the 
    console.log(params); 
    let path = url[0].toLowerCase(); //fix URL to all lowercase
    switch(path) {
            
        case '/': //if nothing after slash, it's the homepage
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('This is the home page');
          break;
            
        case '/about': //about page, etc...
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('This is the about page');
          break; 
            
        case '/get':
          let found = book.get(params.title); //get the book's title
          res.writeHead(200, {'Content-Type': 'text/plain'}); //gonna display the title in plain text
          res.end('Results for ' + params.title + "\n" + JSON.stringify(found)); //display the info exported
          break;   
            
        case '/delete':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Entry for the title ' + params.title + ' has been deleted!');
          break;  
            
        default:
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Sorry, page not found!');
          break;
    }
}).listen(process.env.PORT || 3000); //view this on localhost at http://127.0.0.1:3000/