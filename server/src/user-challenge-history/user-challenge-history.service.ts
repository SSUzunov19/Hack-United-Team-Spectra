import { Injectable } from '@nestjs/common';
import { CreateUserChallengeHistoryDto } from './dto/create-user-challenge-history.dto';
import { UpdateUserChallengeHistoryDto } from './dto/update-user-challenge-history.dto';
import { PrismaService } from '../prisma.service';
import { UserChallengeHistories, Prisma } from '@prisma/client';
@Injectable()
export class UserChallengeHistoryService { 
  constructor(private readonly prisma: PrismaService) {}

  async findAllUserChallengeHistories(): Promise<UserChallengeHistories[]> {
    return await this.prisma.userChallengeHistories.findMany();
  }

  async findUserChallengeHistoryById(id: string): Promise<UserChallengeHistories> {
    return await this.prisma.userChallengeHistories.findUnique({
      where: { id: id },
    });
  }

  async findUserChallengeHistoryByUserChallengeId(userChallengeId: string): Promise<UserChallengeHistories> {
    return await this.prisma.userChallengeHistories.findFirst({
      where: { userChallengeId: userChallengeId },
    });
  }

  async createUserChallengeHistory(createUserChallengeHistoryDto: CreateUserChallengeHistoryDto): Promise<UserChallengeHistories> {
    return await this.prisma.userChallengeHistories.create({
      data: createUserChallengeHistoryDto,
    });
  }

  async updateUserChallengeHistory(id: string, updateUserChallengeHistoryDto: UpdateUserChallengeHistoryDto): Promise<UserChallengeHistories> {
    return await this.prisma.userChallengeHistories.update({
      where: { id },
      data: updateUserChallengeHistoryDto,
    });
  }
  
  async deleteUserChallengeHistory(id: string): Promise<UserChallengeHistories> {
    return await this.prisma.userChallengeHistories.delete({
      where: { id },
    });
  }
}
