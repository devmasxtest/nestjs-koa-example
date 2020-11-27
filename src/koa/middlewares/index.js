
async function setContext(ctx, next) {
  const user = { username: 'JhonDoe' }
  ctx.request.user = user;
  ctx.extraData =  { user };
  await next();
}
module.exports = { setContext }
