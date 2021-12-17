'use strict'

const app = require('express')()

const pino = require('pino')
const dest = pino.destination({ sync: false }) // logs to stdout with no args
const logger = pino(dest)

function main() {
  app.get('/', function (req, res) {
    logger.info(req)
    res.send('hello world')
  })

  return app.listen(3000)
}

if (require.main === 'module') {
  main()
} else {
  module.exports = main
}
