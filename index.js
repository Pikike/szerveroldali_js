const express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));

require('./routes/index')(app);


app.listen(3000, function () {
  console.log('http://localhost:3000/');
});