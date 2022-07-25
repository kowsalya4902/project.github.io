var http = require('http');
var fs = require('fs');
console.log("Server running...");
http.createServer(function(request, response){
    fs.readFile('8.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
 console.log("Request received");
    });
}).listen(3080);