import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log(`Request headers[${JSON.stringify(request.headers)}]`);
    console.log(`Request url[${JSON.stringify(request.url)}]`);
    console.log(`Request IP[${JSON.stringify(request.ip)}]`);
    console.log(`Request hostname[${JSON.stringify(request.hostname)}]`);
    return this.appService.getHello();
  }
}