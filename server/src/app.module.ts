import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/locations.module';
import { UserWalletModule } from './user-wallet/user-wallet.module';
import { ChallengeModule } from './challenge/challenge.module';
import { UserChallengeModule } from './user-challenge/user-challenge.module';
import { UserChallengeHistoryModule } from './user-challenge-history/user-challenge-history.module';

@Module({
  imports: [AuthModule, UsersModule, LocationsModule, UserWalletModule, ChallengeModule, UserChallengeModule, UserChallengeHistoryModule],
  providers: [PrismaService],
})
export class AppModule {}
