import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from '@prisma/client';
import { User } from './entity/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got all users' ,type: User })
 
  async getUsers(): Promise<Users[]> {
    return this.usersService.findUsers();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get user by id'})
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user by id' ,type: User })
  
  async getUserById(@Param('id') id: string): Promise<Users> {
    return this.usersService.findUserById(id);
  }

  @Get('email/:email')
  @ApiOperation({summary: 'Get user by email'})
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user by email' ,type: User })
  
  async getUserByEmail(@Param('email') email: string): Promise<Users> {
    return this.usersService.findUserByEmail(email);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiOkResponse({ description: 'Posted user', type: UpdateUserDto })
  
  async createUser(@Body() data: CreateUserDto): Promise<Users> {
    return this.usersService.createUser(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiOkResponse({ description: 'Updated user by id', type: User })
 
  async updateUserById(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<Users> {
    return this.usersService.updateUserById(id, data);
  }

  @Put('email/:email')
  @ApiOperation({ summary: 'Update user by email' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiOkResponse({ description: 'Updated user by email', type: User })
  
  async updateUserByEmail(@Param('email') email: string, @Body() data: UpdateUserDto): Promise<Users> {
    return this.usersService.updateUserByEmail(email, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiOkResponse({ description: 'Deleted user by id', type: User })

  async deleteUser(@Param('id') id: string): Promise<Users> {
    return this.usersService.deleteUser(id);
  }
}
