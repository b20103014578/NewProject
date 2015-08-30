var http = require('http');
var sever = http.createSever(function (req,res) {
  // body...
  res.end("Hello World!!");
})

sever.listen(8080, function (error) {
  // body...
  if(error)
  {
    console.log(error);
  }
  console.log("sever is started");
})
