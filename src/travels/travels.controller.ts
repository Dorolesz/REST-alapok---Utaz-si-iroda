import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import {TravelsService} from './travels.service'
import { Travels } from './travels.entity';
 
@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelsService) {}
 
  @Get()
  findAll() {
    return this.travelsService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelsService.findOne(id);
  }
 
  @Post()
  create(@Body() travel: Travels) {
    return this.travelsService.create(travel);
  }
 
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() travel: Partial<Travels>) {
    return this.travelsService.update(id, travel);
  }
 
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.travelsService.delete(id);
    return { message: 'Travel deleted successfully' };
  }
}
