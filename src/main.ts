import { NestFactory } from '@nestjs/core';
import { KoaAdapter, NestKoaApplication } from 'nest-koa-adapter';
import * as Koa from 'koa';
import { AppModule } from './app.module';

async function koaMiddleware(ctx, next) {
  console.log('originalUrl', ctx.request.originalUrl);
  await next();
}

const koa = new Koa();
async function bootstrap() {
  const app = await NestFactory.create<NestKoaApplication>(
    AppModule,
    new KoaAdapter(koa),
  );
  app.use(koaMiddleware);
  await app.listen(3000);
}
bootstrap();
