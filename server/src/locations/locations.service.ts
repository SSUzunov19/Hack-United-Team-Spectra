import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

import {Locations, Prisma} from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  async findAllLocations(): Promise<Locations[]> {
    return await this.prisma.locations.findMany();
  }

  async findLocationById(id: string): Promise<Locations> {
    return await this.prisma.locations.findUnique({
      where: { id },
    });
  }

  async createLocation(data: Prisma.LocationsCreateInput): Promise<Locations> {
    return await this.prisma.locations.create({
      data,
    });
  }

  async updateLocationById(id: string, data: Prisma.LocationsUpdateInput): Promise<Locations> {
    return await this.prisma.locations.update({
      where: { id },
      data,
    });
  }

  async DeleteLocationById(id: string): Promise<Locations> {
    return await this.prisma.locations.delete({
      where: { id },
    });
  }
}
