import { Module } from '@nestjs/common';
import { ClodinaryModule } from './clodinary/clodinary.module';
import { TaskModule } from './task/task.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [ClodinaryModule, TaskModule],
})
export class AppModule {}
