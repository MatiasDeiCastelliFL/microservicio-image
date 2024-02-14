import { Module } from '@nestjs/common';
import { ClodinaryService } from './clodinary.service';
import { ClodinaryController } from './clodinary.controller';

@Module({
  providers: [ClodinaryService],
  controllers: [ClodinaryController],
})
export class ClodinaryModule {}
