import { PartialType } from '@nestjs/swagger';
import { CreateUserWalletDto } from './create-user-wallet.dto';

export class UpdateUserWalletDto extends PartialType(CreateUserWalletDto) {
    userId?: string;
    balance?: number;
}
