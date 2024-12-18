import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from './user.dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
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
