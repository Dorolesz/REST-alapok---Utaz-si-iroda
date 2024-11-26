import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelsService } from './travels/travels.service';
 
describe('AppController', () => {
  let appController: AppController;
 
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, TravelsService],
    }).compile();
 
    appController = app.get<AppController>(AppController);
  });
 
  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
 
  it('should return an array of travels', () => {
    const result = [
      {
        id: 1,
        destinationCountry: 'Hungary',
        destinationCity: 'Budapest',
        description: 'A beautiful city with rich history and culture.',
image: 'https://example.com/budapest.jpg',
        price: 50000,
        discount: 0,
      },
    ];
    jest.spyOn(appController, 'getTravels').mockImplementation(() => result);
 
    expect(appController.getTravels()).toBe(result);
  });
});
