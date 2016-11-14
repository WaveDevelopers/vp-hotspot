'use strict';

const http = require('http');

const LOCAL_PORT  = 4200;
const REMOTE_PORT = 80;
const REMOTE_ADDR = "192.168.148.1";

http.createServer((request, response) => {

  console.log(request.headers.host);

}).listen(4200);

console.log("TCP server accepting connection on port: " + LOCAL_PORT);
