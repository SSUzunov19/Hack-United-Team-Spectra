import { Module } from '@nestjs/common';
import { UserWalletService } from './user-wallet.service';
import { UserWalletController } from './user-wallet.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserWalletController],
  providers: [UserWalletService, PrismaService],
  exports: [UserWalletService]
})
export class UserWalletModule {}
