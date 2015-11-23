var express = require('express')
var app = express()

app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index.jade', {})
})
 
app.listen(3000)