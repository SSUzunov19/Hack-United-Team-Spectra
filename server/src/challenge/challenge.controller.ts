import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Challenge } from './entity/challenge.entity';
import { Challenges } from '@prisma/client';

@ApiTags('challenges')
@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all challenges' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got all challenges' ,type: Challenge })

  async GetAllChallenges(): Promise<Challenges[]> {
    return await this.challengeService.findAllChallenges();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get challenge by id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got challenge by id', type: Challenge })
  async GetChallengeById(@Param('id') id: string): Promise<Challenges> {
    return await this.challengeService.findChallengeById(id);
  }

  @Get('location/:locationId')
  @ApiOperation({ summary: 'Get challenge by location id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got challenge by location id', type: Challenge })
  async findChallengeByLocationId(@Param('locationId') locationId: string): Promise<Challenges> {
    return await this.challengeService.findChallengeByLocationId(locationId);
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Get challenge by name' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got challenge by name', type: Challenge })
  async findChallengeByName(@Param('name') name: string): Promise<Challenges> {
    return await this.challengeService.fomdChallengeByName(name);
  }

  @Post()
  @ApiOperation({ summary: 'Create challenge' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Posted challenge', type: Challenge })
  async CreateChallenge(@Body() createChallengeDto: CreateChallengeDto): Promise<Challenges> {
    return await this.challengeService.createChallenge(createChallengeDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update challenge' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Updated challenge', type: Challenge })
  async UpdateChallenge(@Param('id') id: string, @Body() updateChallengeDto: UpdateChallengeDto): Promise<Challenges> {
    return await this.challengeService.updateChallenge(id, updateChallengeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete challenge' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Deleted challenge', type: Challenge })
  async DeleteChallenge(@Param('id') id: string): Promise<Challenges> {
    return await this.challengeService.deleteChallenge(id);
  }
}
