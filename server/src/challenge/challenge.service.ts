import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { PrismaService } from '../prisma.service';
import { Challenges, Prisma } from '@prisma/client';
@Injectable()
export class ChallengeService {
  constructor(private prisma: PrismaService) {}

  async findAllChallenges(): Promise<Challenges[]> {
    return await this.prisma.challenges.findMany();
  }

  async findChallengeById(id: string): Promise<Challenges> {
    return await this.prisma.challenges.findUnique({
      where: {id}
    });
  }

  async findChallengeByLocationId(locationId: string): Promise<Challenges> {
    return await this.prisma.challenges.findFirst({
      where: {locationId}
    });
  }

  async fomdChallengeByName(name: string): Promise<Challenges> {
    return await this.prisma.challenges.findFirst({
      where: {name}
    });
  }

  async createChallenge(data: CreateChallengeDto): Promise<Challenges> {
    return await this.prisma.challenges.create({
      data
    });
  }

  async updateChallenge(id: string, data: UpdateChallengeDto): Promise<Challenges> {
    return await this.prisma.challenges.update({
      where: {id},
      data
    });
  }

  async deleteChallenge(id: string): Promise<Challenges> {
    return await this.prisma.challenges.delete({
      where: {id}
    });
  }
}
