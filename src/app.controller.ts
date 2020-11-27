import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { KoaContext } from './koa/context.decorator';
import { Context } from 'koa';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  // fetch extra data from previews koa context
  @Get('/')
  getHello(@KoaContext() ctx: Context) {
    return {
      success: true,
      extraData: ctx.extraData,
    };
  }
}
