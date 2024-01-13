import { ApiProperty } from '@nestjs/swagger';

export class CreateUserChallengeHistoryDto {
    @ApiProperty({ example: '1', description: 'userChallengeId' })
    readonly userChallengeId: string;

    @ApiProperty({ example: '1', description: 'timer' })
    readonly timer: string;
}
