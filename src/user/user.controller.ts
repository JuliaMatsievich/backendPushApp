import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Post('registerToken')
  async register(@Body() dto: UserDto) {
    return await this.userService.registerToken(dto);
  }

  @Get('getAllTokens')
  async getAllTokens() {
    return this.userService.getAllTokens();
  }
}
