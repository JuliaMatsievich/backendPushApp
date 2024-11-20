import { Injectable } from '@nestjs/common';
import expoPushNotifications from 'expo-server-sdk'; // или используйте библиотеку для уведомлений
import { PrismaService } from '../prisma/prisma.service';
import { SoundNotification } from './notifications.types';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async sendNotification(title: string, sound: SoundNotification, body: string) {
    const tokens = await this.prisma.user.findMany();
    const expo = new expoPushNotifications();

    const messages = tokens.map((user) => ({
      to: user.pushToken,
      title: title,
      sound: sound,
      body: body,
      data: { someData: 'goes here' },
    }));

    console.log('title', title);
    console.log('body', body);

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
