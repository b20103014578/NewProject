var express = require('express');
var mongoose = require('mongoose');

var app = express();

//  connext to mongodb
mongoose.connect('mongodb://10.240.4.144:27017/MyDatabase');

var Schema = mongoose.Schema;

var PhoneModel = new Schema({
  name : String,
  number : String
});

mongoose.model('Phone' , PhoneModel);
var Phone = mongoose.model('Phone');

//  Create data
app.get('/PhoneCreate',function (req,res) {
  // body...
  var name_create = req.query.name;
  var phone_create = req.query.number;

  if(!name_create || !phone_create)
  {
    return res.send("Null");
  }

  Phone.create({
    name : name_create,
    number : phone_create
  },function (err, data) {
    // body...
    if(err)
    {
      console.log("Eror");
      return res.send(err);
    }
    res.send('Phone : '+data);
    // res.json(data);
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

  Phone.find({name : name_create},function (err,Phones) {
    // body...
    if(err)
    {
      return res.send(err);
    }
    res.json(Phones);
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
