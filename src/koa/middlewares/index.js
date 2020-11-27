
async function setContext(ctx, next) {
  const user = { username: 'example' }
  ctx.request.user = user;
  ctx.extraData =  { user };
  await next();
}
module.exports = { setContext }
