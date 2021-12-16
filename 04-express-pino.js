'use strict'

const app = require('express')()

const pino = require('pino')
const dest = pino.destination({ sync: false }) // logs to stdout with no args
const logger = pino(dest)

app.use(require('express-pino-logger')({ logger }))

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
