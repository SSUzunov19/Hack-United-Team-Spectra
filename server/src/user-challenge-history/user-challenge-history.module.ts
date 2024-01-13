import { Module } from '@nestjs/common';
import { UserChallengeHistoryService } from './user-challenge-history.service';
import { UserChallengeHistoryController } from './user-challenge-history.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UserChallengeHistoryController],
  providers: [UserChallengeHistoryService, PrismaService],
  exports: [UserChallengeHistoryService],
})
export class UserChallengeHistoryModule {}
