import { Body, Controller, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async createUser(@Request() req) {
    const { username, password } = req.body;

    return {
      message: 'User Added successfully',
      user: await this.userService.createUser(username, password),
    };
  }
}
