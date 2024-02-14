import { Module } from '@nestjs/common';
import { ClodinaryModule } from './clodinary/clodinary.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [ClodinaryModule],
})
export class AppModule {}
