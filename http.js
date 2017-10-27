'use strict';

let http = require('http');


let serverCallback = function(req, res) {
    res.writeHead(200);
    res.end('Hello Http');
};


let server = http.createServer(serverCallback);


server.listen(3535,function() {
    console.log("Server is up on localhost:"+3535);
});