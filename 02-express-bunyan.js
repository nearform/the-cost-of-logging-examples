'use strict'

const app = require('express')()

function main() {
  app.use(require('express-bunyan-logger')())

  app.get('/', function (req, res) {
    res.send('hello world')
  })

  return app.listen(3000)
}

main()
