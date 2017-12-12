//var {mongoose} =require('/save');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('User',{
  //name: String,
  name: String,
  command: String,
});

module.exports ={User};
