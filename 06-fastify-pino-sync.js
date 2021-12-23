const Fastify = require('fastify')
const fastify = Fastify({ logger: true })

fastify.get('/', async () => 'hello world')

fastify.listen(3000)
