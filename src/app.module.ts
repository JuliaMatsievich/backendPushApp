import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { NotificationsService } from './notifications/notifications.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [ConfigModule.forRoot(), NotificationsModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, NotificationsService],
})
export class AppModule {}
