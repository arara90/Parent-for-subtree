import { Test, TestingModule } from '@nestjs/testing';
import { ParentUserController } from './parent-user.controller';

describe('ParentUserController', () => {
  let controller: ParentUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParentUserController],
    }).compile();

    controller = module.get<ParentUserController>(ParentUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
