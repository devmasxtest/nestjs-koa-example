import { NestFactory } from '@nestjs/core';
import { KoaAdapter, NestKoaApplication } from 'nest-koa-adapter';
import * as Koa from 'koa';
import { AppModule } from './app.module';
import { setContext, printKoaContext } from './koa/middlewares/index';

const koa = new Koa();
async function bootstrap() {
  const app = await NestFactory.create<NestKoaApplication>(
    AppModule,
    new KoaAdapter(koa),
  );
  app.use(setContext);
  app.use(printKoaContext);
  await app.listen(3000);
}
bootstrap();
