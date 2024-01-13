import {ApiProperty} from '@nestjs/swagger';

export class CreateLocationDto {
    @ApiProperty({example: '45', description: 'The lattitude startof the location'})
    readonly latitudeStart: number;

    @ApiProperty({example: '52', description: 'The longtitude start of the location'})
    readonly longitudeStart: number;

    @ApiProperty({example: '48', description: 'The lattitude end of the location'})
    readonly latitudeEnd: number;

    @ApiProperty({example: '50', description: 'The longtitude end of the location'})
    readonly longitudeEnd: number;
}
