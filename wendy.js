var http = require('http');
var express = require('express');

var sever = http.createServer(function (req, res) {
  // body...
  res.end("你好!");
})

sever.listen(8080, function (error) {
  // body...
  if(error)
    console.log("Error");
  console.log("SeverStart");
})
