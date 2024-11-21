import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SoundNotification } from './notifications.types';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  async sendNotification(@Body() title: string, sound: SoundNotification, body: string) {
    return await this.notificationsService.sendNotification(title, sound, body);
  }
}
