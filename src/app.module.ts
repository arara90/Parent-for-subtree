import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentUserModule } from './parent-user/parent-user.module';

@Module({
  imports: [ParentUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
