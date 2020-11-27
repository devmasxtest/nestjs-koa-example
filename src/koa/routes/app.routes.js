const Router = require('koa-router');
const router = new Router();

router.get('/koa', async (ctx, next) => {
  ctx.body = {
    success: true,
  };
  await next()
});

module.exports = router
