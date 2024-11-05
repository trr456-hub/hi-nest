import { Test, TestingModule } from '@nestjs/testing';
import { TouchApiService } from './touch-api.service';
import { NotFoundException } from '@nestjs/common';

describe('TouchApiService', () => {
  let service: TouchApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TouchApiService],
    }).compile();

    service = module.get<TouchApiService>(TouchApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should be 4', () => {
  //   expect(2 + 2).toEqual(5);
  // });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a API', () => {
      service.create({
        name: 'Test API',
        year: 28,
        pwd: ['1', '1', '5', '1', '3', '5', '1'],
      });

      const api = service.getOne(1);
      expect(api).toBeDefined();
      expect(api.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toEqual('data id값을 찾을 수 없습니다. 999');
      }
    });
  });

  describe('remove', () => {
    it('deletes a api ', () => {
      service.create({
        name: 'Test API',
        year: 28,
        pwd: ['1', '1', '5', '1', '3', '5', '1'],
      });
      // console.log(service.getAll());
      const beforeRemove = service.getAll().length;
      service.remove(1);
      const afterRemove = service.getAll().length;

      expect(afterRemove).toBeLessThan(beforeRemove);
    });
    it('should return a 404', () => {
      try {
        service.remove(9999);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        name: 'Test API',
        year: 28,
        pwd: ['1', '1', '5', '1', '3', '5', '1'],
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a api', () => {
      service.create({
        name: 'Test API',
        year: 28,
        pwd: ['1', '1', '5', '1', '3', '5', '1'],
      });
      service.update(1, { name: 'update test', year: 30 });
      const api = service.getOne(1);
      expect(api.name).toEqual('update test');
    });
    it('should throw a NotFoundExeotion', () => {
      try {
        service.update(9999, {});
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
