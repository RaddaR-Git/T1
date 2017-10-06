/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var http = require('http');
var server = http.createServer();



function control(petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola, Mundo!');
    resp.end();
}
server.on('request', control);
server.listen(8080);