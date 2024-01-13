import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'John', description: 'First name of the user'})
    readonly name: string;

    @ApiProperty({example: 'John Doe', description: 'Name of the user'})
    readonly username: string;

    @ApiProperty({example: 'Male', description: 'The gender of the user'})
    readonly gender: string;

    @ApiProperty({example: 'johndoe@gmail.com', description: 'Email of the user'})
    readonly email: string;

    @ApiProperty({example: 'password', description: 'Password of the user'})
    readonly password: string;
}
