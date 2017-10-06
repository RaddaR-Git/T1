/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var express = require('express')
//var app = express()
//
//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))
//
//app.get('/', function(request, response) {
//  response.send('Hello World!')
//})
//
//app.listen(app.get('port'), function() {
//  console.log("Node app is running at localhost:" + app.get('port'))
//})


var express = require('express');
var app = express();



app.get('/', function(request, response) {
  response.send('Hello World!')
});

var server = app.listen(3000, function () {
    console.log("");
});