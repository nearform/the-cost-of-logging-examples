'use strict'

const app = require('express')()

function main () {
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
