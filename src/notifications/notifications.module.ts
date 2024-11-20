import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

@Module({
  providers: [NotificationsService, PrismaService],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
