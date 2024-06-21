import { Module } from '@nestjs/common';
import { ParentUserController } from './parent-user.controller';
import { ParentUserService } from './parent-user.service';

@Module({
  controllers: [ParentUserController],
  providers: [ParentUserService]
})
export class ParentUserModule {}
