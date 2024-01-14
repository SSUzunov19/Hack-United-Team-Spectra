import { PartialType } from '@nestjs/swagger';
import { CreateChallengeDto } from './create-challenge.dto';

export class UpdateChallengeDto extends PartialType(CreateChallengeDto) {
    name?: string;
    description?: string;
    isFeeApplied?: boolean;
    feeAmount?: number;
    totalPrize?: number;
    imrUrl?: string;
    featured?: boolean;
    caretogy?: string;
    locationId?: string;
    peopleLimit?: number;
    isChallengeCompleted?: boolean;
}
