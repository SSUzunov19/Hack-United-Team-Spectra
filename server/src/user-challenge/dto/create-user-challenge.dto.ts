import { ApiProperty } from '@nestjs/swagger';

export class CreateUserChallengeDto {
    @ApiProperty({ example: '1', description: 'The id of the challenge' })
    readonly userId: string;

    @ApiProperty({ example: '1', description: 'The id of the challenge' })
    readonly challengeId: string;

    @ApiProperty({ example: 'Completed', description: 'The status of the challenge' })
    readonly status: string;
}
