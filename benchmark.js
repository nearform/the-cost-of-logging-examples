const autocannon = require('autocannon')

const simplest = require('./01-simplest-express')
const bunyan = require('./02-express-bunyan')
const winston = require('./03-express-winston')
const pino = require('./04-express-pino')
const pinoRaw = require('./04-1-express-pino')
const fs = require('fs')

const stream = fs.createWriteStream('./result.md')

async function performBenchmark(name, httpServer) {
  console.log('Running... ', name)
  stream.write(`------- [${name}] -------\n`)
  const app = await httpServer()
  const result = await autocannon({
    title: name,
    url: 'http://localhost:3000',
    connections: 10,
    duration: 60
  })
  // console.log(autocannon.printResult(result))
  stream.write(autocannon.printResult(result))
  app.close()
}


async function main() {
  await performBenchmark('01-simplest-express', simplest)
  await performBenchmark('02-express-bunyan', bunyan)
  await performBenchmark('03-express-winston', winston)
  await performBenchmark('04-express-pino', pino)
  await performBenchmark('04-1-express-pino', pinoRaw)
  console.log('Done!')
  stream.close()
}

main()
