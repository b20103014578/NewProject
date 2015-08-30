var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');
// var sever = http.createServer(function (req,res) {
//   // body...
//   res.end("Hello World!!");
// })
//
// sever.listen(8080, function (error) {
//   // body...
//   if(error)
//   {
//     console.log(error);
//   }
//   console.log("sever is started");
// })

var app = express()

app.use(bodyparser.json())  //轉成json
app.use(bodyparser.urlencoded(
  { extended: true}))

app.use(bodyparser.json(
  { type: 'application/vnd.api+json'}))

app.get('/',function (req,res) {
  // body...
  res.send("Null");
})
app.get('/eat',function (req,res) {
  // body...
  var breakfast = req.query.breakfast;
  var lun       = req.query.lunch;
  var din       = req.query.dinner;
  res.send("Breakfast: "+breakfast+"Lunch: "+lun+"Dinner: "+din);

//  res.send("eat1, eat2, eat3");
})

app.post('/play',function (req, res) {
  // body...
  var ball = req.body.ball;
  res.send("play: "+ball);
})

app.listen(8080,function (req,res) {
  // body...
  console.log("Sever ready");
})
