import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserChallengeHistoryService } from './user-challenge-history.service';
import { CreateUserChallengeHistoryDto } from './dto/create-user-challenge-history.dto';
import { UpdateUserChallengeHistoryDto } from './dto/update-user-challenge-history.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('user-challenge-history')
@Controller('user-challenge-history')
export class UserChallengeHistoryController {
  constructor(private readonly userChallengeHistoryService: UserChallengeHistoryService) {}

  @Get()
  @ApiOperation({ summary: 'Get all user challenge histories' })
  @ApiResponse({ status: 200, description: 'Return all user challenge histories.'})
  async findAll() {
    return await this.userChallengeHistoryService.findAllUserChallengeHistories();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user challenge history by id' })
  @ApiResponse({ status: 200, description: 'Return user challenge history by id.'})
  async findOne(@Param('id') id: string) {
    return await this.userChallengeHistoryService.findUserChallengeHistoryById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create user challenge history' })
  @ApiResponse({ status: 200, description: 'Return created user challenge history.'})
  async create(@Body() createUserChallengeHistoryDto: CreateUserChallengeHistoryDto) {
    return await this.userChallengeHistoryService.createUserChallengeHistory(createUserChallengeHistoryDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user challenge history' })
  @ApiResponse({ status: 200, description: 'Return updated user challenge history.'})
  async update(@Param('id') id: string, @Body() updateUserChallengeHistoryDto: UpdateUserChallengeHistoryDto) {
    return await this.userChallengeHistoryService.updateUserChallengeHistory(id, updateUserChallengeHistoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user challenge history' })
  @ApiResponse({ status: 200, description: 'Return deleted user challenge history.'})
  async remove(@Param('id') id: string) {
    return await this.userChallengeHistoryService.deleteUserChallengeHistory(id);
  }
}
