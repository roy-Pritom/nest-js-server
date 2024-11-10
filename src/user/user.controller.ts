import { Controller, Post, Get, Param, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create User
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // Get All Users
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  // Get User by ID
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  // Update User Name
  @Put(':id')
  async updateUserName(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUserName(id, updateUserDto);
  }
}
