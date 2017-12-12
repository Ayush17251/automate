var express = require('express');
var bodyparser = require('body-parser');
var {mongoose} = require('./save');
var {User} = require('./schema');
var app = express();

const port = 8080;

app.get('/' , function (req , res) {
  res.sendFile(__dirname + '/index.html');
})
app.use(bodyparser.json());

app.post('/ris',(req,res)=>{
  console.log(req.body.email);
  //res.json("you send this" + req.body.email);
  //use save (req.body, res)

  var lays = new User({
    name: req.body.name,
    command: req.body.command
  });

  lays.save().then((result)=>{
    res.send(result);
  },(err)=>{
    res.status(400).send(err);
  });
});

app.listen(8080,()=>{
  console.log("started server");
});
