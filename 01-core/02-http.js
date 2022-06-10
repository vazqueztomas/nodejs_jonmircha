/*'use strict'

const http = require('http')

http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type" : 'text/plain'})
    res.end('Hello world \n')
}).listen(1337, "127.0.0.1")

console.log('Server running at http://127.0.0.1/1337')
*/

"use strict";
const http = require("http");

function webServer(req, res) {
  res
    .writeHead(200, { "Content-Type": "text/html" })
    .end("<h1>Hello nodejs </h1>");
}
http.createServer(webServer).listen(3000, "127.0.0.1");

console.log("Server running at http://localhost:3000");
