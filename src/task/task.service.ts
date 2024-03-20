import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  @Cron(CronExpression.EVERY_10_MINUTES)
  async reset() {
    await axios.get('https://service-image.onrender.com');
  }
}
