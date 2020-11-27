import { NestFactory } from '@nestjs/core';
const path = require('path');
import { KoaAdapter, NestKoaApplication } from 'nest-koa-adapter';
import * as Koa from 'koa';
import { AppModule } from './app.module';
import { setContext } from './koa/middlewares/index';
import * as koaAppRouter from './koa/routes/app.routes';

const koa = new Koa();
async function bootstrap() {
  const app = await NestFactory.create<NestKoaApplication>(
    AppModule,
    new KoaAdapter(koa),
  );
  app.use(setContext);
  app.use(koaAppRouter.routes());

  // static folder shuld be on '../views' because assets files are not moved to dist folder
  app.useStaticAssets(path.join(__dirname, '../static'));

  // views folder shuld be on '../views' because html files are not moved to dist folder
  app.setViewEngine({
    viewsDir: path.join(__dirname, '../views'),
    map: {
      html: 'lodash',
    },
  });

  await app.listen(3000);
}
bootstrap();
