var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./config/db');



app.use(express.static(__dirname + "/public"));

app.get('/patientList', function(req, res) {
  console.log('I got a GET request');

  db.find({}, function(err, data) {
    if (err) {
      console.log(err);
      return res.send(500, 'Something Went wrong with Retrieving data');
    } else {
      console.log(data[0].patient);
      res.json(data);
    }
  });

});

app.listen(port);
console.log('Server listening on port: ', port);