import { Injectable } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';

import { PrismaService } from '../prisma.service';
import { UserWallets, Prisma } from '@prisma/client';
@Injectable()
export class UserWalletService {
  constructor(private prisma: PrismaService) {}

  async findAllUserWallets(): Promise<UserWallets[]> {
    return await this.prisma.userWallets.findMany();
  }

  async findUserWalletById(id: string): Promise<UserWallets> {
    return await this.prisma.userWallets.findUnique({
      where: {id}
    });
  }

  async findUserWalletByUserId(userId: string): Promise<UserWallets> {
    return await this.prisma.userWallets.findFirst({
      where: {userId}
    });
  }

  async createUserWallet(data: CreateUserWalletDto): Promise<UserWallets> {
    return await this.prisma.userWallets.create({
      data
    });
  }

  async updateUserWallet(id: string, data: UpdateUserWalletDto): Promise<UserWallets> {
    return await this.prisma.userWallets.update({
      where: {id},
      data
    });
  }

  async deleteUserWallet(id: string): Promise<UserWallets> {
    return await this.prisma.userWallets.delete({
      where: {id}
    });
  }
}
