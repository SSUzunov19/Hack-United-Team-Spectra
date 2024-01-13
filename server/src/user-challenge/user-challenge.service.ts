import { Injectable } from '@nestjs/common';
import { CreateUserChallengeDto } from './dto/create-user-challenge.dto';
import { UpdateUserChallengeDto } from './dto/update-user-challenge.dto';
import { PrismaService } from '../prisma.service';
import { UserChallenges, Prisma } from '@prisma/client';

@Injectable()
export class UserChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllUserChallenges(): Promise<UserChallenges[]> {
    return await this.prisma.userChallenges.findMany();
  }

  async findUserChallengeById(id: string): Promise<UserChallenges> {
    return await this.prisma.userChallenges.findUnique({
      where: { id: id },
    });
  }

  async findUserChallengeByUserId(userId: string): Promise<UserChallenges> {
    return await this.prisma.userChallenges.findFirst({
      where: { userId: userId },
    });
  }

  async findUserChallengeByChallengeId(
    challengeId: string,
  ): Promise<UserChallenges> {
    return await this.prisma.userChallenges.findFirst({
      where: { challengeId: challengeId },
    });
  }

  async createUserChallenge(
    createUserChallengeDto: CreateUserChallengeDto,
  ): Promise<UserChallenges> {
    return await this.prisma.userChallenges.create({
      data: createUserChallengeDto,
    });
  }

  async updateUserChallenge(
    id: string,
    updateUserChallengeDto: UpdateUserChallengeDto,
  ): Promise<UserChallenges> {
    return await this.prisma.userChallenges.update({
      where: { id },
      data: updateUserChallengeDto,
    });
  }

  async deleteUserChallenge(id: string): Promise<UserChallenges> {
    return await this.prisma.userChallenges.delete({
      where: { id },
    });
  }
}
