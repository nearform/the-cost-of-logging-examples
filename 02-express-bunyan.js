'use strict'

const app = require('express')()

app.use(require('express-bunyan-logger')())

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
