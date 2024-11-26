import { Module } from '@nestjs/common';
import { TravelsService } from './travels/travels.service';
import { TravelsController } from './travels/travels.controller';
 
@Module({
  imports: [],
  controllers: [TravelsController],
  providers: [TravelsService],
})
export class AppModule {}
