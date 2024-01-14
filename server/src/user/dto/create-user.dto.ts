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

    @ApiProperty({example: 'About me', description: 'About me of the user'})
    readonly aboutMe?: string;

    @ApiProperty({example: 'https://www.google.com/image.png', description: 'The image url of the user'})
    readonly imgUrl?: string;

    @ApiProperty({ example: 'https://www.instagram.com/username', description: 'The instagram link of the user' })
    readonly instagramLink?: string;

    @ApiProperty({ example: 'https://www.twitter.com/username', description: 'The twitter link of the user' })
    readonly facebookLink?: string;
}
