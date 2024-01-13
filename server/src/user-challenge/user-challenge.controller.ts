import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserChallengeService } from './user-challenge.service';
import { CreateUserChallengeDto } from './dto/create-user-challenge.dto';
import { UpdateUserChallengeDto } from './dto/update-user-challenge.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserChallenge } from './entity/user-challenge.entity';
import { UserChallenges } from '@prisma/client';

@ApiTags('userChallenges')
@Controller('user-challenge')
export class UserChallengeController {
  constructor(private readonly userChallengeService: UserChallengeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all user challenges' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got all user challenges' ,type: UserChallenge })
  async GetAllUserChallenges(): Promise<UserChallenges[]> {
    return await this.userChallengeService.findAllUserChallenges();
  }


  @Get(':id')
  @ApiOperation({ summary: 'Get user challenges by id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user challenges by id', type: UserChallenge })
  async GetUserChallengeById(@Param('id') id: string): Promise<UserChallenges> {
    return await this.userChallengeService.findUserChallengeById(id);
  }

  @Get('userId/:userId')
  @ApiOperation({ summary: 'Get user challenges by user id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user challenges by user id', type: UserChallenge })
  async findUserChallengeByUserId(@Param('userId') userId: string): Promise<UserChallenges> {
    return await this.userChallengeService.findUserChallengeByUserId(userId);
  }

  @Get('challengeId/:challengeId')
  @ApiOperation({ summary: 'Get user challenges by challenge id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user challenges by challenge id', type: UserChallenge })
  async findUserChallengeByChallengeId(@Param('challengeId') challengeId: string): Promise<UserChallenges> {
    return await this.userChallengeService.findUserChallengeByChallengeId(challengeId);
  }

  @Post()
  @ApiOperation({ summary: 'Create user challenges' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Posted user challenges', type: UserChallenge })
  async CreateUserChallenge(@Body() createUserChallengeDto: CreateUserChallengeDto): Promise<UserChallenges> {
    return await this.userChallengeService.createUserChallenge(createUserChallengeDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user challenges' })
  @ApiResponse({ status: 400, description: 'Bad request.'})	
  @ApiOkResponse({ description: 'Updated user challenges', type: UserChallenge })
  async UpdateUserChallenge(@Param('id') id: string, @Body() updateUserChallengeDto: UpdateUserChallengeDto): Promise<UserChallenges> {
    return await this.userChallengeService.updateUserChallenge(id, updateUserChallengeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user challenges' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Deleted user challenges', type: UserChallenge })
  async DeleteUserChallenge(@Param('id') id: string): Promise<UserChallenges> {
    return await this.userChallengeService.deleteUserChallenge(id);
  }
}
