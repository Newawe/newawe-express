const express = require('express')
const path = require('path');
const app = express()
const port = 8080
const projects = require("./projects.json") //only temp

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, '/www/views'));

app.use('/css', express.static('www/css'))

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Newawe',
    message: 'Hello there!',
    active: "index",
    projects: projects
  })
})

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!')
})
