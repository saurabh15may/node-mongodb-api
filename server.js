var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./app/db/mongoose');
var {Person} = require('./app/model/Person');

var app = express();

app.use(bodyParser.json());

app.post('/person', (req, res) => {
  var person = new Person({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      mobile_number: req.body.mobile_number,
      email: req.body.email,
      skills: req.body.skills,
      isProfileComplete: req.body.isProfileComplete
  });

  person.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/person', (req, res) => {
  person.find().then((person) => {
    res.send({person});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
