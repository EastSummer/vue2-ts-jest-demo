const Koa = require('koa')
const parser = require('koa-bodyparser')

const InitManager = require('./core/init')
// const test = require('./app/api/v1/test')

const app = new Koa()
app.use(parser())

InitManager.initCore(app)

// app.use(test.routes())

app.listen(7777)

// app.use(async (ctx, next) => {
//   console.log('---server start---');
//   console.log(ctx.path, ctx.method)
//   if (ctx.path==='/111' && ctx.method==='GET') {
//     ctx.body = {key: 'apiTest'}
//   } 
  
//   await next()
// })