import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ClodinaryService } from './clodinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('clodinary')
export class ClodinaryController {
  constructor(private readonly ServiceCloudinary: ClodinaryService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File) {
    return await this.ServiceCloudinary.create(file);
  }
}
