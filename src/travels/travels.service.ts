import { Injectable, NotFoundException } from '@nestjs/common';
import { Travels } from './travels.entity';

@Injectable()
export class TravelsService {
  private travels: Travels[] = [];

  findAll(): Travels[] {
    return this.travels;
  }

  findOne(id: number): Travels {
    const travel = this.travels[id];
    if (!travel) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }
    return travel;
  }
  
  create(travel: Travels): Travels {
    this.travels.push(travel);
    return travel;
  }

  update(id: number, travel: Partial<Travels>): Travels {
    const existingTravel = this.findOne(id);
    const updatedTravel = { ...existingTravel, ...travel };
    this.travels[id] = updatedTravel;
    return updatedTravel;
  }

  delete(id: number): void {
    const index = this.travels.findIndex((_, i) => i === id);
    if (index === -1) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }
    this.travels.splice(index, 1);
  }

}
