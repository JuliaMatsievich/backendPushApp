import { Body, Controller, Post } from '@nestjs/common';
import { NotificationDto } from './notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send')
  async sendNotification(@Body() dto: NotificationDto) {
    return await this.notificationsService.sendNotification(dto);
  }
}
