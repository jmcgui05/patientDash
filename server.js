var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./config/db');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/patientList', function(req, res) {

  db.find({}, function(err, data) {
    if (err) {
      console.log(err);
      return res.send(500, 'Something Went wrong with Retrieving data');
    } else {
      // console.log(data[0]);
      res.json(data);
    }
  });

});

app.post('/patientList', function(req, res) {
  console.log('>>>>> ', req.body);
})

app.listen(port);
console.log('Server listening on port: ', port);