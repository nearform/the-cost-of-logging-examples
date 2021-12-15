'use strict'

const app = require('express')()

app.use(require('express-pino-logger')({
  extreme: true
}))

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
