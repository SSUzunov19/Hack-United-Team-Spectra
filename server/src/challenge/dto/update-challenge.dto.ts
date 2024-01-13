import { PartialType } from '@nestjs/swagger';
import { CreateChallengeDto } from './create-challenge.dto';

export class UpdateChallengeDto extends PartialType(CreateChallengeDto) {
    name?: string;
    description?: string;
    isFeeApplied?: boolean;
    fee?: number;
    imrUrl?: string;
    locationId?: string;
    peopleLimit?: number;
    isChallengeCompleted?: boolean;
}
