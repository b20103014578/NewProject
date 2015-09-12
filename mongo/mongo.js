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

var Phone = mongoose.model('Phone' , PhoneModel);

app.get('/PhoneCreate',function (req,res) {
  // body...
  Phone.Create({
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

app.listen(80,function (err) {
  // body...
  if(err){
    return console.log("Error");
  }
  console.log("Sever Start!");
})
