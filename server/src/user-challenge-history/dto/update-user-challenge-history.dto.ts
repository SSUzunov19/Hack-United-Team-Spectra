import { PartialType } from '@nestjs/swagger';
import { CreateUserChallengeHistoryDto } from './create-user-challenge-history.dto';

export class UpdateUserChallengeHistoryDto extends PartialType(CreateUserChallengeHistoryDto) {
    userChallengeId?: string;
    timer?: string;
}
