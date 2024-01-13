import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ChallengeController],
  providers: [ChallengeService, PrismaService],
  exports: [ChallengeService]
})
export class ChallengeModule {}
