
async function setContext(ctx, next) {
  ctx.extraData = { username: 'example' };
  await next();
}
async function printKoaContext(ctx, next) {
  const {
    request: originalUrl,
    extraData: { username },
  } = ctx;
  console.log({ originalUrl, username });
  await next();
}
module.exports = { setContext, printKoaContext }
