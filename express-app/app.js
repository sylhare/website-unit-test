const express = require('express')
const path = require('path');
const app = express()

app.use('/css', express.static(__dirname + '/css'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname+'/contact.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
