import { Controller, Post, Get, Param, Body, Put, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './interfaces/user.interface';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Create User
  @Post()
  @HttpCode(201) // Returns a 201 status code for successful creation
  async createUser(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.userService.createUser(createUserDto);
    return {
      statusCode: 201,
      message: 'User created successfully',
      data: createdUser,
    };
  }

  // Get All Users
  @Get()
  @HttpCode(200) // Returns a 200 status code for a successful get request
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return {
      statusCode: 200,
      message: 'Users retrieved successfully',
      data: users,
    };
  }

  // Get User by ID
  @Get(':id')
  @HttpCode(200) // Returns a 200 status code for a successful get request
  async getUserById(@Param('id') id: number) {
    const user = await this.userService.getUserById(Number(id));
    if (!user) {
      return {
        statusCode: 404,
        message: 'User not found',
        data: null,
      };
    }
    return {
      statusCode: 200,
      message: 'User retrieved successfully',
      data: user,
    };
  }

  // Update User Name
  @Put(':id')
  @HttpCode(200) // Returns a 200 status code for successful update
  async updateUserName(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.updateUserName(id, updateUserDto);
    if (!updatedUser) {
      return {
        statusCode: 404,
        message: 'User not found or update failed',
        data: null,
      };
    }
    return {
      statusCode: 200,
      message: 'User updated successfully',
      data: updatedUser,
    };
  }
}
