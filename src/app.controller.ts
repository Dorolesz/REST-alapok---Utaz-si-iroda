import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TravelsService } from './travels/travels.service';
import { Travels } from './travels/travels.entity';
 
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly travelsService: TravelsService
  ) {}
 
  @Get('/travels')
  getTravels(): Travels[] {
    return this.travelsService.findAll();
  }
}
