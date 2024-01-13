import { PartialType } from '@nestjs/swagger';
import { CreateUserChallengeDto } from './create-user-challenge.dto';

export class UpdateUserChallengeDto extends PartialType(CreateUserChallengeDto) {
    userId?: string;
    challengeId?: string;
    status?: string;
    instagramLink?: string;
    twitterLink?: string;
}
