import { PartialType } from '@nestjs/swagger';
import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
    lattitudeStart?: number;
    longtitudeStart?: number;
    lattitudeEnd?: number;
    longtitudeEnd?: number;
}
