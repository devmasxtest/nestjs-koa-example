import { NestFactory } from '@nestjs/core';
import { KoaAdapter, NestKoaApplication } from 'nest-koa-adapter';
import * as Koa from 'koa';
import { AppModule } from './app.module';
import { setContext, printKoaContext } from './koa/middlewares/index';
import * as koaAppRouter from './koa/routes/app.routes';

const koa = new Koa();
async function bootstrap() {
  const app = await NestFactory.create<NestKoaApplication>(
    AppModule,
    new KoaAdapter(koa),
  );
  app.use(setContext);
  app.use(printKoaContext);
  app.use(koaAppRouter.routes());
  await app.listen(3000);
}
bootstrap();
