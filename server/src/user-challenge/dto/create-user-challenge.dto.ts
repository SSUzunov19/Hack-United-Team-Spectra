import { ApiProperty } from '@nestjs/swagger';

export class CreateUserChallengeDto {
    @ApiProperty({ example: '1', description: 'The id of the challenge' })
    readonly userId: string;

    @ApiProperty({ example: '1', description: 'The id of the challenge' })
    readonly challengeId: string;

    @ApiProperty({ example: 'Completed', description: 'The status of the challenge' })
    readonly status: string;

    @ApiProperty({ example: 'https://www.instagram.com/username', description: 'The instagram link of the user' })
    readonly instagramLink?: string;

    @ApiProperty({ example: 'https://www.twitter.com/username', description: 'The twitter link of the user' })
    readonly twitterLink?: string;
}
