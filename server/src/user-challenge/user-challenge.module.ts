import { Module } from '@nestjs/common';
import { UserChallengeService } from './user-challenge.service';
import { UserChallengeController } from './user-challenge.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UserChallengeController],
  providers: [UserChallengeService, PrismaService],
  exports: [UserChallengeService]
})
export class UserChallengeModule {}
