var express = require('express')
var app = express()

app.set('view engine', 'jade');
app.use(express.static('public'));

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
 
app.listen(3000)