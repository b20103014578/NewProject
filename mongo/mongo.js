var express = require('express');
var mongoose = require('mongoose');

var app = express();

//  connext to mongodb
mongoose.connect('mongodb://10.240.4.144:27017/MyDatabase');

var Schema = mongoose.Schema();

var Phone = new Schema({
  name : String,
  number : String
});

mongoose.modle('Phone' , Phone);

app.get('/PhoneCreate',function (req,res) {
  // body...
  Phone.create({
    name : "MyName",
    number : "123-456-789"
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
