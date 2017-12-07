const Koa = require('koa')
const logger = require('./middleware/logger')
const app = new Koa()

app.use(logger());

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
