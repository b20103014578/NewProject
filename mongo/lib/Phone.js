require('./node_model');

var mongoose = require('mongoose');

var Phone = mongoose.model('Phone');

//  Create
function Create(name, number, callback){
  Phone.create({
    name : name,
    number : number
  },function (err, data) {
    // body...
    if(err)
    {
      console.log("Eror");
      return callback(err);
    }
    callback(null,data);
  })
}

//  Find
function Find(name, callback){
    Phone.find({name : name},function (err,Phones) {
      // body...
      if(err)
      {
        return callback(err);
      }
      callback(null,Phone);
    })
}

module.exports = {
  //  Outside : Inside
  Create : Create,
  Find : Find
}
