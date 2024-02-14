import { HttpStatus, Injectable } from '@nestjs/common';
import { uploadCloudinary } from 'src/config/upload';

@Injectable()
export class ClodinaryService {
  async create(file: Express.Multer.File) {
    if (!file) return 'enter the image';
    const upload = await uploadCloudinary(file);
    console.log(upload);
    return {
      status: HttpStatus.OK,
      url: upload['url'],
      secure_url: upload['secure_url'],
    };
  }
}
