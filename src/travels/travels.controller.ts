import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { Travels } from './travels.entity';
 
@Controller('travels')
export class TravelsController {
  constructor(private readonly travelsService: TravelsService) {}
 
  @Get()
  findAll(@Query('sort') sort?: string) {
    return this.travelsService.findAll(sort);
  }
 
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.travelsService.findOne(id);
  }
 
  @Post()
  create(@Body() travel: Omit<Travels, 'id' | 'discount'>) {
    return this.travelsService.create(travel);
  }
 
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updates: Partial<Omit<Travels, 'id'>>) {
    return this.travelsService.update(id, updates);
  }
 
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.travelsService.delete(id);
    return { message: 'Travel deleted successfully' };
  }
}
