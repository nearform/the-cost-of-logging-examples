'use strict'

const app = require('express')()
const winston = require('winston')
const winstonExpress = require('express-winston')

app.use(winstonExpress.logger({
  transports: [
    new winston.transports.Console({
      json: true
    })
  ]
}))

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
