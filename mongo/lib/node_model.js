var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhoneModel = new Schema({
  name : String,
  number : String
});

mongoose.model('Phone' , PhoneModel);
