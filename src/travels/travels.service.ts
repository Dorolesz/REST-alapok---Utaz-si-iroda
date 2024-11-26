import { Injectable, NotFoundException } from '@nestjs/common';
import { Travels } from './travels.entity';
 
@Injectable()
export class TravelsService {
  private travels: Travels[] = [];
  private idCounter = 1;
 
  findAll(sort?: string): Travels[] {
    let result = Array.from(this.travels); // Másolat készítése
    if (sort) {
      const [key, order] = sort.split('_'); // Pl. "price_desc"
      result.sort((a, b) => {
        if (order === 'desc') {
          return b[key] - a[key];
        }
        return a[key] - b[key];
      });
    }
    return result;
  }
 
  findOne(id: number): Travels {
const travel = this.travels.find((t) => t.id === id);
    if (!travel) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }
    return travel;
  }
 
  create(travel: Omit<Travels, 'id' | 'discount'>): Travels {
    const newTravel = { ...travel, id: this.idCounter++, discount: 0 };
    this.travels.push(newTravel);
    return newTravel;
  }
 
  update(id: number, updates: Partial<Omit<Travels, 'id'>>): Travels {
    const travel = this.findOne(id);
    const updatedTravel = { ...travel, ...updates };
this.travels = this.travels.map((t) => (t.id === id ? updatedTravel : t));
    return updatedTravel;
  }
 
  delete(id: number): void {
const index = this.travels.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }
    this.travels.splice(index, 1);
  }
}
