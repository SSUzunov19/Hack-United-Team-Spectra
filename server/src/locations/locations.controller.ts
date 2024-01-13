import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {Location} from './entity/location.entity';
import {Locations} from '@prisma/client';

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got all locations', type: Location })
  async getAllLocations(): Promise<Locations[]> {
    return this.locationsService.findAllLocations();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get location by id' })
  @ApiResponse({ status: 500, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Got location by id', type: Location })
  async getLocationById(@Param('id') id: string): Promise<Locations> {
    return this.locationsService.findLocationById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create location' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Posted location', type: UpdateLocationDto })
  async createLocation(@Body() location: CreateLocationDto): Promise<Locations> {
    return this.locationsService.createLocation(location);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update location by id' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Updated location by id', type: Location })
  async updateLocationById(@Param('id') id: string, @Body() location: UpdateLocationDto): Promise<Locations> {
    return this.locationsService.updateLocationById(id, location);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete location by id' })
  @ApiResponse({ status: 400, description: 'Bad request.'})
  @ApiOkResponse({ description: 'Deleted location by id', type: Location })
  async removeLocationById(@Param('id') id: string): Promise<Locations> {
    return this.locationsService.DeleteLocationById(id);
  }
}
