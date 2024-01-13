import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserWalletService } from './user-wallet.service';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';
import { UserWallet } from './entity/user-wallet.entity';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserWallets } from '@prisma/client';

@ApiTags('userWallets')
@Controller('user-wallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) {}

  @Get()
  @ApiOperation({ summary: 'Get all user wallets' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got all user wallets' ,type: UserWallet })

  async GetAllUserWallets(): Promise<UserWallets[]> {
    return await this.userWalletService.findAllUserWallets();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user wallets by id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user wallets by id', type: UserWallet })
  async GetUserWalletById(@Param('id') id: string): Promise<UserWallets> {
    return await this.userWalletService.findUserWalletById(id);
  }

  @Get('userId/:userIid')
  @ApiOperation({ summary: 'Get user wallets by user id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got user wallets by user id', type: UserWallet })
  async findUserWalletByUserId(@Param('userId') userId: string): Promise<UserWallets> {
    return await this.userWalletService.findUserWalletById(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create user wallets' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Posted user wallets', type: UserWallet })
  async CreateUserWallet(@Body() createUserWalletDto: CreateUserWalletDto): Promise<UserWallets> {
    return await this.userWalletService.createUserWallet(createUserWalletDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user wallets' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Updated user wallets', type: UserWallet })
  async UpdateUserWallet(@Param('id') id: string, @Body() updateUserWalletDto: UpdateUserWalletDto): Promise<UserWallets> {
    return await this.userWalletService.updateUserWallet(id, updateUserWalletDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user wallets' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Deleted user wallets', type: UserWallet })
  async DeleteUserWallet(@Param('id') id: string): Promise<UserWallets> {
    return await this.userWalletService.deleteUserWallet(id);
  }
}
