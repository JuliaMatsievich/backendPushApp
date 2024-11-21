import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { NotificationDto } from './notification.dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UsePipes(new ValidationPipe())
  @Post('send')
  async sendNotification(@Body() dto: NotificationDto) {
    return await this.notificationsService.sendNotification(dto);
  }
}
