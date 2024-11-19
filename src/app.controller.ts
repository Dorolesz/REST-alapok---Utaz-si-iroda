import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Konyv } from './konyv';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  konyvek: Konyv[] = [
    {
      id: 1,
      title: 'x',
      author: 'x',
      isbn: 'x',
      publishYear: 1,
      reserved: true,
    }
  ]
}
