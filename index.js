var express = require('express')
var path = require('path');
var app = express()

app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(express.static('views/surrounded'));

app.get('/', function (req, res) {
  res.render('about.jade', {
    about: true
  })
})

app.get('/portfolio', function (req, res) {
  res.render('portfolio.jade', {
    portfolio: true
  })
})

app.get('/surrounded', function (req, res) {
  res.sendFile(path.resolve(__dirname) + '/views/surrounded/surrounded.html')
})
 
app.listen(8080)

