import { ApiProperty } from '@nestjs/swagger';

export class CreateUserWalletDto {
    @ApiProperty({example: '1', description: 'The id of the user'})
    readonly userId: string;

    @ApiProperty({example: '100', description: 'The balance of the user'})
    readonly balance: number;

    constructor(userId: string, balance: number){
        this.userId = userId;
        this.balance = balance;
    }
}
