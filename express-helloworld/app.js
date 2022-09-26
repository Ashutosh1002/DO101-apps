var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/bilal', function (req, res) {
  res.send('Hello billu!\n');
});

app.get('/siwan', function (req, res) {
  res.send('Hello Siwan!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

