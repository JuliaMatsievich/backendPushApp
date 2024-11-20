import { Injectable } from '@nestjs/common';
import expoPushNotifications from 'expo-server-sdk'; // или используйте библиотеку для уведомлений
import { PrismaService } from '../prisma/prisma.service';
import { SoundNotification } from './notifications.types';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async sendNotification(message: string, sound: SoundNotification, title: string) {
    const tokens = await this.prisma.user.findMany();
    const expo = new expoPushNotifications();

    const messages = tokens.map((user) => ({
      to: user.pushToken,
      sound: sound,
      title: title,
      body: message,
      data: { someData: 'goes here' },
    }));

    await expo.sendPushNotificationsAsync(messages);
    // try {
    //   const tickets = await expo.sendPushNotificationsAsync(messages);
    //   console.log(tickets);
    // } catch (error) {
    //   console.error('Ошибка при отправке уведомлений:', error);
    // }
  }
}
