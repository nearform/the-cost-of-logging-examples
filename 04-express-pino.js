'use strict'

const app = require('express')()

const pino = require('pino')
const dest = pino.destination({ sync: false, dest: '/tmp/test.log' })
const logger = pino(dest)

function main() {
  app.use(require('express-pino-logger')({ logger }))

  app.get('/', function (req, res) {
    res.send('hello world')
  })

  return app.listen(3000)
}

if (require.main === module) {
  main()
} else {
  module.exports = main
}
