const Fastify = require('fastify')
const pino = require('pino')
const dest = pino.destination({ sync: false, dest: '/tmp/test.log' })
const logger = pino(dest)

const fastify = Fastify({ logger })

fastify.get('/', async () => 'hello world')

fastify.listen(3000)
