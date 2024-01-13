import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name?: string;
    username?: string;
    gender?: string;
    email?: string;
    password?: string;
    aboutMe?: string;
    imgUrl?: string;
}
