import { Test, TestingModule } from '@nestjs/testing';
import { TouchApiService } from './touch-api.service';

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
});
