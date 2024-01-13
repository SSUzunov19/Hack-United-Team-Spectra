import { ApiProperty } from '@nestjs/swagger';

export class CreateChallengeDto {
    @ApiProperty({example: 'Racing theme', description: 'The name of the challenge'})
    readonly name: string;
    
    @ApiProperty({example: 'Racing theme', description: 'The description of the challenge'})
    readonly description: string;

    @ApiProperty({example: 'false', description: 'The fee applied of the challenge'})
    readonly isFeeApplied: boolean;

    @ApiProperty({example: '100', description: 'The fee of the challenge'})
    readonly feeAmount?: number;

    @ApiProperty({example: '100', description: 'The total prize of the challenge'})
    readonly totalPrize: number;

    @ApiProperty({example: 'link', description: 'The img url of the challenge'})
    readonly imrUrl?: string;

    @ApiProperty({example: 'false', description: 'The featured of the challenge'})
    readonly featured?: boolean;

    @ApiProperty({example: '1', description: 'The id of the location'})
    readonly locationId: string;

    @ApiProperty({example: '1', description: 'The limit of the poeple'})
    readonly peopleLimit: number;

    @ApiProperty({example: 'false', description: 'The status of the challenge'})
    readonly isChallengeCompleted: boolean;
}
