const Router = require('koa-router')

const router = new Router({
    prefix: '/v1/test'
})

router.get('/get', async (ctx, next) => {
  ctx.body = {key: 'apiGetTest'}
})

router.post('/post', async (ctx, next) => {
  console.log('req: ', ctx.request.body);
  ctx.response.body = {key: 'apiPostTest'}
  console.log('res: ', ctx.response);
})

module.exports = router