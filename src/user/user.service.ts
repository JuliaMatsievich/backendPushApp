import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async registerToken(dto: UserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        pushToken: dto.pushToken,
      },
    });

    if (existingUser) {
      return {
        user: existingUser,
      };
    } else {
      const user = await this.prisma.user.create({
        data: {
          pushToken: dto.pushToken,
        },
      });

      return {
        user: this.returnUserFields(user),
      };
    }
  }

  async getAllTokens() {
    const users = await this.prisma.user.findMany({
      select: {
        pushToken: true,
      },
    });
    return users.map((user) => user.pushToken);
  }

  returnUserFields(user) {
    return {
      id: user.id,
      pushToken: user.pushToken,
    };
  }
}
