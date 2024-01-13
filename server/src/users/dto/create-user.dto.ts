import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'John Doe', description: 'Name of the user'})
    readonly username: string;

    @ApiProperty({example: 'johndoe@gmail.com', description: 'Email of the user'})
    readonly email: string;

    @ApiProperty({example: 'password', description: 'Password of the user'})
    readonly password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
