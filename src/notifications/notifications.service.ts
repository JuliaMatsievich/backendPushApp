import { Injectable } from '@nestjs/common';
import expoPushNotifications from 'expo-server-sdk'; // или используйте библиотеку для уведомлений
import { PrismaService } from '../prisma/prisma.service';
import { NotificationDto } from './notification.dto';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async sendNotification(dto: NotificationDto) {
    const tokens = await this.prisma.user.findMany();
    const expo = new expoPushNotifications();

    const messages = tokens.map((user) => ({
      to: user.pushToken,
      title: dto.title,
      sound: dto.sound ?? dto.soundObj,
      body: dto.body,
      data: { someData: 'goes here' },
    }));

    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];

    for (const chunk of chunks) {
      try {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        console.log(ticketChunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        console.error(error);
      }
    }
    return messages;
  }
}
