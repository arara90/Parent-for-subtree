import { Test, TestingModule } from '@nestjs/testing';
import { ParentUserService } from './parent-user.service';

describe('ParentUserService', () => {
  let service: ParentUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParentUserService],
    }).compile();

    service = module.get<ParentUserService>(ParentUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
