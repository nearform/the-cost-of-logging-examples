'use strict'

const app = require('express')()
const winston = require('winston')
const winstonExpress = require('express-winston')

function main() {
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

  return app.listen(3000)
}

if (require.main === module) {
  main()
} else {
  module.exports = main
}
