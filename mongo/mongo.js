var express = require('express');
var mongoose = require('mongoose');
var Phone = require('./lib/Phone');

var app = express();

//  connext to mongodb
mongoose.connect('mongodb://10.240.4.144:27017/MyDatabase');

//  Create data
app.get('/PhoneCreate',function (req,res) {
  // body...
  var name_create = req.query.name;
  var phone_create = req.query.number;

  if(!name_create || !phone_create)
  {
    return res.send("Null");
  }

  Phone.Create(name_create,phone_create,function (err,phones) {
    // body...
    if(err)
      return res.send("Error!!!");
    res.json(phones);
  })
})

//  Search data
app.get('/PhoneFind',function (req,res) {
  // body...
  var name_create = req.query.name;

  if(!name_create)
  {
    return res.send("Null");
  }

  Phone.Find(name_create,function (err, phones) {
    // body...
    if(err)
      return res.send("Find Error!!");
    res.json(phones);
  })
})

//  Listen port 80
app.listen(80,function (err) {
  // body...
  if(err){
    return console.log("Error");
  }
  console.log("Sever Start!");
})
